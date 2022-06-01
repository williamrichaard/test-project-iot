Feature: Listar Paradas

    Scenario: Listar todas as paradas
        When listar todas as paradas de onibus pela rota /busstop
        Then deve ser respondido o schema "get-busstop" com status 200