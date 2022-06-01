Feature: Check

    Scenario Outline: Enviando posição do onibus na API e validando o contrato
        When enviar posicao do onibus por "<type>"
        Then deve ser respondido o schema "post-check-bus" com status <status>
        Examples:
            | type    | status |
            | valid   | 201    |
            | invalid | 400    |

#Dado ou Given: Pré-requisito
#Quando ou When: Acões
#Então ou Then: Validações dessas ações