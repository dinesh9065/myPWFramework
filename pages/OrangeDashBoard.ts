import {test, Locator,Page} from '@playwright/test'

export class OrangeDashBoard {

readonly userDropDown :Locator ;
readonly userLogout : Locator; 
readonly page : Page

constructor(page){
this.page = page;
this.userDropDown = page.locator('span').filter({has: page.locator('p.oxd-userdropdown-name')});
this.userLogout = page.getByRole('menuitem', {name : 'Logout'});

}


async logoutUser(){

   await  this.userDropDown.click();
   await this.userLogout.click();
}

async goToOrangeHRMDashBoardPage(){
   
   await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
}

}