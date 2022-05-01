Feature: Criar Bus

    Scenario Outline: Criando um id do onibus na API e validando o contrato
        When criar onibus por "<type>"
        Then deve ser respondido o schema "post-bus" com status <status>
        Examples:
            | type    | status |
            | valid   | 201    |
            | invalid | 400    |