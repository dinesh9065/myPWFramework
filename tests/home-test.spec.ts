//import {test} from '@playwright/test'
//import {LoginPage} from '../pages/LoginPage'
import {test} from '../fixtures/hooks-fixtures';
import CommonUtils from '../utils/CommonUtils';
import { expect} from '@playwright/test';


test.skip("Verify Title", async ({page ,gotoUrl,logout}) => {

    const pageTitle = await page.title();
  await  expect(pageTitle).toBe('OrangeHRM');
  await  expect(page).toHaveTitle('OrangeHRM');
});


test.skip("Navigate To Admin Page", async ({page, gotoUrl, logout}) => {
 await page.getByText('Admin').click();

 await expect(page.locator('span.oxd-topbar-body-nav-tab-item').filter({hasText : 'User Management'} )).toBeVisible();


})

// test.beforeEach('HomePage test',async ({page, loginFix,dashboard , orangeDash})=> {

//const  login = new LoginPage(page);
//await login.goToOrangeHRMLoginPage();
//await login.navigateToOrangeHRMHomePage("Admin", "admin123");


 //const  username : string  = process.env.USER_NAME ?process.env.USER_NAME : '';
 //const  password : string  = process.env.PASSWORD ?process.env.PASSWORD : '';


//const commonUtils = new CommonUtils();


// await loginFix.goToOrangeHRMLoginPage();

//const userDec = commonUtils.decrypt(username);
//const passDec = commonUtils.decrypt(password);

//console.log(userDec);
//console.log(passDec);
//await loginFix.navigateToOrangeHRMHomePage("Admin","admin123");

//await loginFix.navigateToOrangeHRMHomePage(userDec,passDec);

//await dashBoard.expandActiveUserDropDown();
//await dashboard.checkLocators();

//await orangeDash.logoutUser();
// });

// test.afterAll("Logout Application ",  () => {

// console.log("END of the test")

// });
