Feature: Buscar Parada Bus ID

    Scenario: Buscando um id do onibus na API e validando o contrato
        When buscar proximas parada do onibus pelo id
        Then deve ser respondido o schema "get-nextbuses-id" com status 200