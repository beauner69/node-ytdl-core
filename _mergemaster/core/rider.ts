import { deb } from '../debug';
import { MergeMasterDeepend } from './deepend';
import { BillOfWorks, FactsFound } from '../types';

export class Rider {
  Facts: FactsFound;

  BOW: BillOfWorks;

  // BuildPhase = dPhase({ label: 'Build' });
  // DeployPhase = dPhase({ label: 'Deploy' });

  constructor(BOW: BillOfWorks, Facts: FactsFound) {
    this.BOW = BOW;
    this.Facts = Facts;

    // this.DeployPhase.depend(this.BuildPhase);
    // this.DeployPhase.depend(dBuildGate({}));
  }

  async DoTheBuild() {
    // if (this.BOW.actually_do_it) {
    deb.log('ACTUALLY GONNA DO IT');
    await MergeMasterDeepend.BuildArtifact(this.DeployPhase.guid);
    // } else {
    // deb.log('JUST BUILDING, NOT DEPLOYING');
    // await ShotgunDeepend.BuildArtifact(this.BuildPhase.guid);
    // }
  }
}
