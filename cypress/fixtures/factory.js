import pure from 'pure-gen'
//pure.setLocale('pt_BR');

export class Factory {

    static postBus(bus_type) {
        switch (bus_type) {
            case 'valid':
                return {
                    "name": pure.name.findName(),
                    "busNumber": pure.random.number(),
                    "route": pure.address.streetName()
                }
            case 'invalid':
                return {
                    "name": "string",
                    "busNumber": 0,
                    "route": "string"
                }
            default:
                return { notfound: "The user type was not found, please verify!" }
        }
    }

    static postBusstop(busstop_type) {
        switch (busstop_type) {
            case 'valid':
                return {
                    "name": pure.address.streetSuffix(),
                    "latitude": pure.address.latitude(),
                    "longitude": pure.address.longitude(),
                    "direction": "A"
                }
            case 'invalid':
                return {
                    "name": "Teste 2",
                    "latitude": -2.5018046695294243,
                    "longitude": -44.29094807366519,
                    "direction": "A"
                }
            default:
                return { notfound: "The user type was not found, please verify!" }
        }
    }

    static postCheck(check_type) {
        switch (check_type) {
            case 'valid':
                return {
                    "bus_id": 1,
                    "busStop_id": 1
                }
            case 'invalid':
                return {
                    "bus_id": "string",
                    "busStop_id": 1
                }
            default:
                return { notfound: "The user type was not found, please verify!" }
        }
    }
}