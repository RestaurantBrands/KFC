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
        cy.wait(3000)
        cy.get(".header-nav li:nth-of-type(1) .mat-ripple-unbounded").click();
        cy.wait(6000)

        //Checking 1st new items
        cy.get('#menu-new .ng-star-inserted:nth-of-type(1) .title').should('have.text',data.Newitem1);
        //Checking 2nd new items
        //#menu-new .ng-star-inserted:nth-of-type(2) .title
        cy.get('#menu-new .ng-star-inserted:nth-of-type(2) .title').should('have.text',data.Newitem2);
        //Checking 3rd new items
        cy.get('#menu-new .ng-star-inserted:nth-of-type(3) .title').should('have.text', data.Newitem3);
        //Checking 4th new item
        cy.get('#menu-new .ng-star-inserted:nth-of-type(4) .title').should('have.text', data.Newitem4);
        //Checking 5th new item
        cy.get('#menu-new .ng-star-inserted:nth-of-type(5) .title').should('have.text', data.Newitem5);
        //Checking 6th new item
        //cy.get('#menu-new .ng-star-inserted:nth-of-type(6) .title').should('have.text', data.Newitem6)
        

      
       })
      
    
    });
  });