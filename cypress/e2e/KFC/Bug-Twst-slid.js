///reference types= "cypress"/>
describe('Order Burger for pickup', () => {
    it('Burger order for pickup', () => {
        cy.fixture('login').then((data)=>{
            cy.log(data)
            cy.visit("https://kfc.co.nz/") ;
            cy.viewport(1280, 720);
            cy.loginapp(data.email,data.password);
            cy.clickLink(data.Burger);
            //cy.get('.modal-body > div > div:nth-of-type(2) > .product-desc  .price').should('have.text', data.Bugcombprice);
            cy.get('.modal-body > .row > :nth-child(1) > .product-desc > .product-btn-area > app-button.ng-star-inserted > .mat-focus-indicator').click();
            cy.wait(1000);
            //cy.get('h1').should('have.text', data.RegBurger);
            cy.get('.sticky-button > app-button > .mat-focus-indicator').click();
            cy.wait(1000);
            cy.clickLink(data.Twister);
            cy.wait(1000);

            cy.get('.modal-body > .row > :nth-child(1) > .product-desc > .product-btn-area > app-button.ng-star-inserted > .mat-focus-indicator').click();
            cy.wait(10000);

            cy.get("[class='sticky-button sticky-button-customize mt-4'] [tabindex]").click();
            cy.clickLink(data.Slider);
            cy.wait(1000);
            //cy.get('.modal-body > .row > :nth-child(1) > .product-desc > .product-btn-area > app-button.ng-star-inserted > .mat-focus-indicator').click();
            cy.get("[class='sticky-button sticky-button-customize mt-4'] [tabindex]").click();
            cy.wait(1000);

             cy.get('.header-right .Itemadded').click();
             cy.wait(1000);
             cy.get('.sticky-button [tabindex]').click();
             cy.get("[for='cash']").click();
             cy.get("[class='block-btn d-none d-md-block mb-4 checkout-sticky'] [type]").click();

    
           })
        
    });
    
})