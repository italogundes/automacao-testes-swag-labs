/// <reference types="Cypress" />

describe('Comprar Produtos', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/inventory.html');
    cy.get('.product_label').should('be.visible');

    cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
    cy.get(':nth-child(2) > .pricebar > .btn_primary').click();

    cy.get('.fa-layers-counter').should('have.text', '2');
  });

  it('Confirmar compra sem preencher dados pessoais', () => {
    cy.get('#shopping_cart_container').click();

    cy.get('.subheader').should('have.text', 'Your Cart');

    cy.get('.btn_action').click();

    cy.get('.subheader').should('have.text', 'Checkout: Your Information');

    cy.get('.btn_primary').click();

    cy.get('[data-test="error"]').should('be.visible');
  });

  it('Confirmar compra', () => {
    cy.get('#shopping_cart_container').click();

    cy.get('.subheader').should('have.text', 'Your Cart');

    cy.get('.btn_action').click();

    cy.get('.subheader').should('have.text', 'Checkout: Your Information');

    cy.get('[data-test="firstName"]').type('Cliente');
    cy.get('[data-test="lastName"]').type('Teste');
    cy.get('[data-test="postalCode"]').type('65485000');

    cy.get('.btn_primary').click();

    cy.get('.subheader').should('have.text', 'Checkout: Overview');

    cy.get('.btn_action').click();

    cy.get('.complete-header').should('be.visible');
  });
});
