import { test as setup  } from '../fixtures/pom-fixtures'
import {expect} from '@playwright/test'
import path  from 'path';
import CommonUtils from '../utils/CommonUtils';
const authFile = path.join(__dirname,'../playwright/.auth/user.json');
setup("Authenticate test ", async ({page ,loginP }) => {

const comObject = new CommonUtils();

//  const user = comObject.encrypt("Admin");
//  const pwd = comObject.encrypt("admin123");
//  console.log(user);
  
//  console.log(pwd);
// console.log(">>>>>>>>>>>>");
// const Duser = comObject.decrypt(user)
// const Dpwd = comObject.decrypt(pwd)
// console.log(Duser);
//  console.log(Dpwd);

const username = process.env.USER_NAME!;
const password = process.env.PASSWORD!;
await loginP.goToOrangeHRMLoginPage();
const user = comObject.decrypt(username)
const pwd = comObject.decrypt(password)

await loginP.navigateToOrangeHRMHomePage(user,pwd);

await expect(page.getByAltText('client brand banner')).toBeVisible({timeout: 10000});

await page.context().storageState({path: authFile});

});