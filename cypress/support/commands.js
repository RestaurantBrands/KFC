// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginapp",(email,password)=>{
    cy.get('app-sign-in > .mat-ripple').click();
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get(".sticky-button [type]").click();
    cy.get('.container > app-button > .mat-focus-indicator').click();
    cy.get('.align-items-end > :nth-child(2) > a').click();
    cy.get('#RestaurantSearch').type("5 Gulliver Place, Conifer Grove, Takanini")
    cy.get('.pac-item').click();
    cy.get(':nth-child(1) > :nth-child(4) > .btn-group > :nth-child(2) > .mat-focus-indicator').click();
       
})

Cypress.Commands.add('clickLink',(label)=>{
    cy.wait(3000);
    cy.get('.title').contains(label).click();
})