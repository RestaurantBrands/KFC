///reference types= "cypress"/>
describe('login to UAT', () => {
    it('loginto UAT', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          });
        
        cy.visit("https://kfcnz-dev.cognizantorderserv.com");
        cy.url().should('eq','https://kfcnz-dev.cognizantorderserv.com/');
       cy.wait(8000);
    });
    
});