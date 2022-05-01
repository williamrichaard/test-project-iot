Feature: Criar Parada

    Scenario Outline: Criando uma parada para o onibus na API e validando o contrato
        When criar parada por "<type>"
        Then deve ser respondido o schema "post-busstop" com status <status>
        Examples:
            | type           | status |
            | valid          | 201    |
            | invalid        | 400    |