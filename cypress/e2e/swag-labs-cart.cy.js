/// <reference types="Cypress" />

describe('Carrinho de Compras', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/inventory.html');
    cy.get('.product_label').should('be.visible');
  });

  it('Adicionar produto ao carrinho', () => {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click();

    cy.get('.fa-layers-counter').should('have.text', '1');
  });

  it('Página do carrinho', () => {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click();

    cy.get('.fa-layers-counter').should('have.text', '1');

    cy.get('#shopping_cart_container').click();

    cy.get('.subheader').should('have.text', 'Your Cart');
  });

  it('Remover produto do carrinho na página do carrinho', () => {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click();

    cy.get('.fa-layers-counter').should('have.text', '1');

    cy.get('#shopping_cart_container').click();

    cy.get('.subheader').should('have.text', 'Your Cart');

    cy.get('.cart_item').contains('REMOVE').click();
  });
});
