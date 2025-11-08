import {Locator,Page} from '@playwright/test';


 export class LoginPage{

readonly usernameInput : Locator ;
readonly password : Locator ;
readonly page : Page;
readonly loginButton : Locator ;



constructor(page){
this.page = page
this.usernameInput = page.getByRole('textbox', {name:'username'});
this.password = page.getByRole('textbox', {name:'password'});
this.loginButton = page.getByRole('button', {name: 'Login'});

}

async goToOrangeHRMLoginPage(){
    const url = process.env.BASE_URL ? process.env.BASE_URL : '';
   await this.page.goto(url);
}



async navigateToOrangeHRMHomePage(username : string , passwd: string){
    await this.usernameInput.fill(username);
    await this.password.fill(passwd);
    await this.loginButton.click();
}



}