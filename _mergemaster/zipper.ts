import { Rider } from './core/rider';
import { official } from './debug';
import { BillOfWorks, FactsFound } from './types';

official.log('===================');
official.log('MERGE LIKE A ZIPPER');
official.log('===================');

async function GetStuckIn() {
  const BOW: BillOfWorks = {
    StagingArea: '/tmp/mergemaster',
  };
  const Facts: FactsFound = {};

  const myRider = new Rider(BOW, Facts);
  myRider.DoTheBuild();
}

GetStuckIn();
