import {test as BaseTest} from '../fixtures/pom-fixtures';


type hooksFixture = {
    gotoUrl : any;
    logout : any;
}


export const test = BaseTest.extend<hooksFixture>({
    gotoUrl : async  ({ orangeDash}, use) => {
      await  orangeDash.goToOrangeHRMDashBoardPage();
      await use();
    },

    logout : async ({orangeDash} , use) =>{
     await use();
   //  await    orangeDash.logoutUser();
    }
})