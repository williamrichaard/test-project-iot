Feature: Bus ID

    Scenario Outline: Buscando uma posição do onibus na API e validando o contrato
        When buscar onibus pelo id "<id>"
        Then deve ser respondido o schema "get-bus-id" com status <status>
        Examples:
            | id        | status |
            | valid     | 200    |
            | not_found | 404    |