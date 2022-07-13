import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import RegistrationPage from "../pageObjects/RegistrationPage";
import SearchPage from "../pageObjects/SearchPage";

describe("Juice-shop without auto login", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Login", () => {
    LoginPage.accountButton.click();
    LoginPage.navLoginButton.click();
    LoginPage.emailBox.type('demo');
    LoginPage.passwordBox.type('demo');
    LoginPage.loginButton.click();
    LoginPage.accountButton.click();
    LoginPage.accountValidation.should('contain.text', 'demo' );
  });
});

describe("Juice shop registration", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Registration", () => {

    //Creating new account
    RegistrationPage.accountButton.click();
    RegistrationPage.navLoginButton.click();
    RegistrationPage.notYetACustomerButton.click();
    var chars = '1234567890';
    var email = 'email_';
      for(var ii=0; ii<4; ii++){
        email += chars[Math.floor(Math.random() * chars.length)];
    }
    email += '@ebox.com';
     RegistrationPage.emailBox.type(email);

    RegistrationPage.passwordBox.type('password');
    RegistrationPage.passwordBoxRepeat.type('password');
    RegistrationPage.securityQuestionBox.click();
    RegistrationPage.menuOptions.contains("Name of your favorite pet?").click();
    RegistrationPage.fillAnswer.type('Cat');
    RegistrationPage.registrationButton.click();

    //Log in new account
    RegistrationPage.loginEmailBox.type(email);
    RegistrationPage.loginPasswordBox.type('password');
    RegistrationPage.loginButton.click();
    RegistrationPage.accountButton.click();
    RegistrationPage.accountValidation.should('contain.text', email );
  });
});

describe("Juice-shop with Auto login", () => {
  beforeEach(() => {
    cy.login("demo", "demo");
    HomePage.visit();
  });

  it.only("Search and validate Lemon", () => {
    SearchPage.searchButton.click();
    SearchPage.searchField.should("be.visible").type("Lemon{enter}");
    SearchPage.selectProduct.click();
    SearchPage.Validation.should('contain.text', 'Sour but full of vitamins.');
  });
  
describe("Validating search by Volume - 500ml", () => {// Create scenario - Search 500ml and validate cards
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });
  
  it.only("Validating search by Volume - 500ml ", () => {  
    JuiceVolumeSearch.searchButton.click();
	JuiceVolumeSearch.searchField.should("be.visible").type("500ml{enter}");
    JuiceVolumeSearch.selectProduct.click('Eggfruit Juice (500ml)');
    JuiceVolumeSearch.validation.should('contain.text', 'Sour but full of vitamins.');
    // Select a product card - Eggfruit Juice (500ml)
    JuiceVolumeSearch.validation.should('contain.text', 'Now with even more exotic flavour.');// Validate that the card (should) contains "Now with even more exotic flavour."
	JuiceVolumeSearch.closeCard.click();// Close the card
	// Select a product card - Lemon Juice (500ml)
	JuiceVolumeSearch.validation.should('contain.text', 'Sour but full of vitamins.'); // Validate that the card (should) contains "Sour but full of vitamins."
	JuiceVolumeSearch.closeCard.click();// Close the card
	// Select a product card - Strawberry Juice (500ml)
	JuiceVolumeSearch.validation.should('contain.text', 'Sweet & tasty!'); // Validate that the card (should) contains "Sweet & tasty!"
  });
 });
 
  // Create scenario - Read a review
  // Click on search icon
  // Search for King
  // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
  // Click expand reviews button/icon (wait for reviews to appear)
  // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!

  // Create scenario - Add a review
  // Click on search icon
  // Search for Raspberry
  // Select a product card - Raspberry Juice (1000ml)
  // Type in review - "Tastes like metal"
  // Click Submit
  // Click expand reviews button/icon (wait for reviews to appear)
  // Validate review -  "Tastes like metal"

  // Create scenario - Validate product card amount
  // Validate that the default amount of cards is 12
  // Change items per page (at the bottom of page) to 24
  // Validate that the amount of cards is 24
  // Change items per page (at the bottom of page) to 36
  // Validate that the amount of cards is 35

  // Create scenario - Buy Girlie T-shirt
  // Click on search icon
  // Search for Girlie
  // Add to basket "Girlie"
  // Click on "Your Basket" button
  // Create page object - BasketPage
  // Click on "Checkout" button
  // Create page object - SelectAddressPage
  // Select address containing "United Fakedom"
  // Click Continue button
  // Create page object - DeliveryMethodPage
  // Select delivery speed Standard Delivery
  // Click Continue button
  // Create page object - PaymentOptionsPage
  // Select card that ends with "5678"
  // Click Continue button
  // Create page object - OrderSummaryPage
  // Click on "Place your order and pay"
  // Create page object - OrderCompletionPage
  // Validate confirmation - "Thank you for your purchase!"

  // Create scenario - Add address
  // Click on Account
  // Click on Orders & Payment
  // Click on My saved addresses
  // Create page object - SavedAddressesPage
  // Click on Add New Address
  // Create page object - CreateAddressPage
  // Fill in the necessary information
  // Click Submit button
  // Validate that previously added address is visible

  // Create scenario - Add payment option
  // Click on Account
  // Click on Orders & Payment
  // Click on My payment options
  // Create page object - SavedPaymentMethodsPage
  // Click Add new card
  // Fill in Name
  // Fill in Card Number
  // Set expiry month to 7
  // Set expiry year to 2090
  // Click Submit button
  // Validate that the card shows up in the list
});
