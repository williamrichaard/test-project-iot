/// <reference types="cypress" />

import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import {Bus} from '../../services/bus.service'


When(`listar todas as paradas de onibus pela rota /busstop`, () => {
	Bus.listar_paradas().then(post_response => {
        cy.wrap(post_response).as('Response')
    })
});

Then(`deve ser respondido o schema {string} com status {int}`, (schema, status) => {
    cy.get('@Response').then(res => {
        cy.contractValidation(res, schema, status).then(valid => {
            expect(valid).to.be.true
        })
    })
});