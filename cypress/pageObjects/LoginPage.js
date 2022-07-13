import BasePage from '../pageObjects/basePage'

class LoginPage extends BasePage {
  static get url () {
    return '/#/login';
  }
  static get elementName(){
    return cy.get('elementSelector');
  }
  //Registring account
  static get accountButton(){
    return cy.get("[id='navbarAccount']");
  }
  static get navLoginButton(){
    return cy.get("[id='navbarLoginButton']");
  }
  static get emailBox(){
    return cy.get("[id='email']");
  }
  static get passwordBox(){
    return cy.get("[id='password']");
  }
  static get loginButton(){
    return cy.get("[id='loginButton']");
  }
  static get accountValidation(){
    return cy.get("button[aria-label='Go to user profile']");
  }
  static get logout(){
    return cy.get("[id='navbarLogoutButton']");
  }
}

export default LoginPage;
