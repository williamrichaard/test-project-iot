/// <reference types="cypress" />

import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import {Bus} from '../../services/bus.service'

When(`buscar proximas parada do onibus pelo {string}`, (args1) => {
	Bus.buscar_parada_id().then(post_response => {
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
