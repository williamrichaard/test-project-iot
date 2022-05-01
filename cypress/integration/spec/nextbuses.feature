Feature: Buscar Parada Bus ID

    Scenario Outline: Criando um id do onibus na API e validando o contrato
        When buscar proximas parada do onibus pelo "id"
        Then deve ser respondido o schema "get-nextbuses-id" com status <status>
        Examples:
            | type    | status |
            | valid   | 200    |
            | invalid | 404    |