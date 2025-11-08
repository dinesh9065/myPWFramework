import {test , Page, Locator, expect} from '@playwright/test'

export class PimPage{

readonly page: Page;
readonly pimIcon: Locator;
readonly empList: Locator;

constructor(page){
this.page = page;
this.pimIcon = page.getByText("PIM");
//getByRole('link', { name: 'PIM' })

this.empList = page.getByRole('link', { name: 'Employee List' })

}

async navigateToPIMModule(){

   await  this.pimIcon.click();
   await expect(this.empList).toBeVisible();
}


}