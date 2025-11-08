import {test as BaseTest } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import { DashBoard } from '../pages/Dashboard';
import {OrangeDashBoard} from '../pages/OrangeDashBoard';
import {PimPage} from '../pages/PimPage';

type PomFixturesType = {
    loginP : LoginPage;
    dashboard : DashBoard;
    orangeDash: OrangeDashBoard;
    pimPage : PimPage;
}


export const test = BaseTest.extend<PomFixturesType>({
    loginP: async ({page}, use) => {
     await  use(new LoginPage(page));

    },

    dashboard:async  ({page} , use) => {
      await   use( new DashBoard(page));
    },

   orangeDash:async ({page}, use)=> {
      await  use(new OrangeDashBoard(page));
   },

   pimPage: async ({page} , use) => {
    await  use (new PimPage(page))
   }
});