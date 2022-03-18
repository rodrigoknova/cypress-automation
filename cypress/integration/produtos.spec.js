/// <reference types="cypress" />

context('Funcionalidade de compra dos produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve selecionar um dos produtos da loja', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq2()
            .contains('Aether Gym Pant')
            .click()
    });

    it.only('Deve adicionar o produto no carrinho', () => {
        var quantidade = 5
        cy.get('[class="product-block grid"]')
        .contains('Aether Gym Pant').click()
        cy.get('.button-variable-item-33').click()
        cy.get('.button-variable-item-Brown').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()


    });
});
