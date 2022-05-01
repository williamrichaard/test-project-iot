/// <reference types="cypress" />

import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import {Bus} from '../../services/bus.service'

When(`buscar onibus pelo id {string}`, () => {
    cy.get('@Response_Bus').then(res_id => {
        Bus.buscar_bus_id(res_id).then(post_response => {
            cy.wrap(post_response).as('Response_Id')
        })
    })
});

Then(`deve ser respondido o schema {string} com status {int}`, (schema, status) => {
    cy.get('@Response').then(res => {
        cy.contractValidation(res, schema, status).then(valid => {
            expect(valid).to.be.true
        })
    })
});