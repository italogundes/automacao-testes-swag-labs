/// <reference types="Cypress" />

describe('Testes Automáticos Swag Labs', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
  });

  it('Login Válido', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');

    cy.get('#login-button').click();

    cy.get('.product_label').should('be.visible');
  });

  it('Login Inválido', () => {
    cy.get('[data-test="username"]').type('standard_userzx');
    cy.get('[data-test="password"]').type('secret_saucezx');

    cy.get('#login-button').click();

    cy.get('[data-test="error"]').should('be.visible');
  });
});
