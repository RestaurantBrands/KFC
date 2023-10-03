///reference types= "cypress"/>
describe('Verify new product', () => {
    it('Verify new product itemlist', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       });
       
       cy.fixture('login').then((data)=>{
        cy.log(data)
        cy.visit("https://kfcnz-dev.cognizantorderserv.com") ;

        cy.loginapp(data.email,data.password);
        cy.clickLink(" 3pc Quarter Pack ");
       cy.get('.sticky-button > app-button > .mat-focus-indicator').click();
       cy.get(':nth-child(2) > app-shopping-cart > .shopping-cart > .mat-ripple').click();
       //Assertion for item name should be same
       cy.get('.cart-title').should('have.text',' 3pc Quarter Pack ');
       cy.get('.sticky-button > app-button > .mat-focus-indicator').click();
       cy.get("#mat-radio-6 > .mat-radio-label > .mat-radio-label-content").click();
       cy.get('.block-btn > .ng-untouched > app-button > .mat-focus-indicator').click();
       cy.get('h1').should('have.text','Order Accepted.')

        
      
       })
      
    
    });
  });