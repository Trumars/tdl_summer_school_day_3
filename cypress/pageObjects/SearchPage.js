import BasePage from '../pageObjects/basePage'

class SearchPage extends BasePage {
  static get url () {
    return '/#/search';
  }
  static get searchButton(){
    return cy.get("[id='searchQuery']");
  }

  static get searchField(){
    return cy.get("[id='searchQuery'] input");
  }

  static get selectProduct(){
    return cy.get("[aria-label='Click for more information about the product']");
  }
  static get Validation(){
    return cy.get('div');
  }

}

export default SearchPage;