/// <reference types="Cypress" />

describe('Filtros da Área de Produtos', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/inventory.html');
    cy.get('.product_label').should('be.visible');
  });

  it('Filtro por nome em ordem alfabética crescente', () => {
    cy.get('.product_sort_container').select('Name (A to Z)');
  });

  it('Filtro por nome em ordem alfabética decrescente', () => {
    cy.get('.product_sort_container').select('Name (Z to A)');
  });

  it('Filtro por preço em ordem crescente', () => {
    cy.get('.product_sort_container').select('Price (low to high)');
  });

  it('Filtro por preço em ordem decrescente', () => {
    cy.get('.product_sort_container').select('Price (high to low)');
  });
});
