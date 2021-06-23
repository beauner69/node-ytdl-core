import { addDSequence, DeependUniverse } from '@zerolabs/deepend';
import { addDCommand, addDCopy, addEmptyDir } from '@zerolabs/deepend-node';
import { deb } from '../debug';

export const MergeMasterDeepend = new DeependUniverse();

export const dSequence = addDSequence(MergeMasterDeepend);
export const dEmptyDir = addEmptyDir(MergeMasterDeepend, ['/tmp/mergemaster']);
export const dCommand = addDCommand(MergeMasterDeepend);
export const dCopy = addDCopy(MergeMasterDeepend);
