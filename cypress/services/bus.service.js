import Rest from "./common/_bus.service"

const URL_BUS = '/bus'
const URL_CHECK = '/check'
const URL_BUS_ID = '/bus/1'
const URL_NEXTBUSES = '/busstop/nextBuses/1'

export class Bus extends Rest {

    static criar_bus() {
        let body = {
            "name": "fortaleza",
            "busNumber": 0,
            "route": "string"
        }
        return super.httpRequestWithBody('POST', URL_BUS, body).then((res) => { console.log(res) })
    }

    static post_check() {
        let body = {
            "bus_id": 1,
            "busStop_id": 1
        }
        return super.httpRequestWithBody('POST', URL_CHECK, body).then((res) => { console.log(res) })
    }

    static buscar_parada_id() {
        return super.httpRequestWithoutBody('GET', URL_NEXTBUSES).then((res) => { console.log(res) })
    }

    static buscar_bus_id() {
        return super.httpRequestWithoutBody('GET', URL_BUS_ID).then((res) => { console.log(res) })
    }
}