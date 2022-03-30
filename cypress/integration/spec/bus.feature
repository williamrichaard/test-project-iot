Feature: Criar Bus

    Scenario: Criando um id do onibus na API e validando o contrato
        When criar onibus na rota /bus
        Then deve ser respondido o schema "post-bus" com status 201