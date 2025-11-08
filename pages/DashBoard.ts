import {Page,Locator} from '@playwright/test'


export class DashBoard{

readonly page :Page ;
readonly user : Locator;
readonly chckAccept : Locator;
readonly btnPmryAction: Locator;
readonly txtpara : Locator;

constructor (page){
this.page = page;
this.user = page.getByRole('textbox', { name: 'Username:' })
this.chckAccept = page.getByRole('checkbox', { name: 'Accept terms' })
this.btnPmryAction = page.getByRole('button', { name: 'Primary Action' })
this.txtpara = page.getByText('This paragraph contains some')

}

async checkLocators() {
await this.user.fill("Dinesh");
await this.chckAccept.check();
await this.btnPmryAction.click();
const text = await  this.txtpara.innerText();
console.log(`>>>>>>>>>> ${text} <<<<<<<<<<<<<`);
}


}