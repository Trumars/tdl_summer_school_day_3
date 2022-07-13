import BasePage from '../pageObjects/basePage'

class RegistrationPage extends BasePage {
  static get url () {
    return '/#/register';
  }
  static get elementName(){
    return cy.get('elementSelector');
  }

  //Old copy-paste code from LoginPage.js
  static get accountButton(){
    return cy.get("[id='navbarAccount']");
  }
  static get navLoginButton(){
    return cy.get("[id='navbarLoginButton']");
  }

  //New registration code
  static get notYetACustomerButton(){
    return cy.get("[id='newCustomerLink']");
  }
  static get emailBox(){
    return cy.get("[id='emailControl']");
  }
  static get passwordBox(){
    return cy.get("[id='passwordControl']");
  }
  static get passwordBoxRepeat(){
    return cy.get("[id='repeatPasswordControl']");
  }
  static get securityQuestionBox(){
    return cy.get("[name ='securityQuestion']");
  }
  static get menuOptions(){
    return cy.get(".mat-option-text");
  }
  static get security(){
    return cy.get("[class='mat-select-placeholder']");
  }
  static get fillAnswer(){
    return cy.get("[id='securityAnswerControl']");
  }
  static get registrationButton(){
    return cy.get("[id='registerButton']");
  }

  //Old copy-paste code from Login.Page.js
  static get loginEmailBox(){
    return cy.get("[id='email']");
  }
  static get loginPasswordBox(){
    return cy.get("[id='password']");
  }
  static get loginButton(){
    return cy.get("[id='loginButton']");
  }
  static get accountValidation(){
    return cy.get("button[aria-label='Go to user profile']");
  }
}

export default RegistrationPage;
