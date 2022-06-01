Feature: Listar Onibus

    Scenario: Listar todas os onibus
        When listar todas as paradas de onibus pela rota /bus
        Then deve ser respondido o schema "get-bus" com status 200