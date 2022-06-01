Feature: Bus ID

    Scenario: Buscando uma posição do onibus na API e validando o contrato
        When buscar onibus pelo id
        Then deve ser respondido o schema "get-bus-id" com status 200