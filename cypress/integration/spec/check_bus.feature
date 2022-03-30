Feature: Check

    Scenario: Buscando onibus na API e validando o contrato
        When enviar posicao do onibus de /check
        Then deve ser respondido o schema "post-check-bus" com status 201

#Dado ou Given: Pré-requisito
#Quando ou When: Acões
#Então ou Then: Validações dessas ações