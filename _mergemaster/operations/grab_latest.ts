// Grab the latest shit off github and make it prettier and ready for consumption
import Path from 'path';
import { dCommand, dEmptyDir, dSequence } from '../core/deepend';
import { Rider } from '../core/rider';

const GIT_URL = 'git@github.com:fent/node-ytdl-core.git';

export function GrabLatestOperation(rider: Rider) {
  const GIT_CLONE_LOCATION = Path.resolve(rider.BOW.StagingArea, 'git_repo');

  return dSequence({
    label: 'Pull from GIT',
    order: [
      dEmptyDir({
        label: 'Make git clone space',
        root: GIT_CLONE_LOCATION,
      }),
      dCommand({
        label: 'Git clone',
        cwd: GIT_CLONE_LOCATION,
        cmd: 'git',
        param: `clone ${GIT_URL}`,
      }),
      // dCommand({
      //   label: 'Android - Hermes Optimisation Run',
      //   cwd: RN_APP_ROOT,
      //   cmd: Path.resolve(
      //     RN_APP_ROOT,
      //     '../../node_modules/hermes-engine/osx-bin/hermesc'
      //   ),
      //   param: `-emit-binary -out ${HERMES_BUNDLE_OUTPUT} ${BUNDLE_OUTPUT} -output-source-map -w `,
      // }),
      // dCommand({
      //   label: 'Android - Merge Bundle and Hermes Sourcemaps',
      //   cwd: RN_APP_ROOT,
      //   cmd: Path.resolve(
      //     RN_APP_ROOT,
      //     '../../node_modules/react-native/scripts/compose-source-maps.js'
      //   ),
      //   param: `${SOURCEMAP_OUTPUT} ${HERMES_SOURCEMAP_OUTPUT} -o ${FINAL_SOURCEMAP_OUTPUT}`,
      // }),
      // dCopy({
      //   label: 'Android - Save the original bundle for BugSnag',
      //   source: BUNDLE_OUTPUT,
      //   dest: SOURCEMAP_ORIGINAL_BUNDLE,
      // }),
      // dCopy({
      //   label: 'Android - Hermes bundle overwrites the original bundle',
      //   source: HERMES_BUNDLE_OUTPUT,
      //   dest: BUNDLE_OUTPUT,
      // }),
    ],
  });
}
