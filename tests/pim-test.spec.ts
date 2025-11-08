import {test } from '../fixtures/hooks-fixtures'
import {expect} from '@playwright/test'
import CommonUtils from '../utils/CommonUtils'



/*
test('NavigateToPIM Module',{tag : ['@UAT','@SIT'],
    annotation:{
        type:'test case link',
        description:'https://jira/testuat/dkt-124'
    }
}, async ({orangeDash, pimPage }) => {

 await    test.step("Navigate To OrangeHRMDashBoardPage", async () =>{
        await orangeDash.goToOrangeHRMDashBoardPage();
})
 
await test.step('Select PIM module',
     async () => {await  pimPage.navigateToPIMModule();

     })
  


});

*/
//if i want to group multiple test inside one block the describe block is used

test.describe('Testcase  for PIM Module' , {
    tag: ['@PIM'],
    annotation:{
        type:"testcaseLink",
        description:'https://jirs/dt524'
    }
},() => {

    test('NavigateToPIM Module',{tag : ['@UAT','@SIT'],
    annotation:{
        type:'test case link',
        description:'https://jira/testuat/dkt-124'
    }
}, async ({orangeDash, pimPage }) => {

 await    test.step("Navigate To OrangeHRMDashBoardPage", async () =>{
        await orangeDash.goToOrangeHRMDashBoardPage();
})
 
await test.step('Select PIM module',
     async () => {await  pimPage.navigateToPIMModule();

     })
  


}),
 test('Create Employee in PIM Module ',{tag : ['@UAT','@SIT'],
    annotation:{
        type:'test case link',
        description:'https://jira/testuat/dkt-124'
    }
}, async ({orangeDash, pimPage }) => {

 await    test.step("Navigate To OrangeHRMDashBoardPage", async () =>{
        await orangeDash.goToOrangeHRMDashBoardPage();
})
 
await test.step('Select PIM module',
     async () => {await  pimPage.navigateToPIMModule();

     })
  


});



});