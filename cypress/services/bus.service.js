import Rest from "./common/_bus.service"
import { Factory } from '../fixtures/factory'

const URL_BUS = '/bus'
const URL_BUSSTOP = '/busstop'
const URL_CHECK = '/check'
const URL_BUS_ID = '/bus'
const URL_NEXTBUSES = '/busstop/nextBuses'

export class Bus extends Rest {

    static criar_bus(bus_type) {
        let body = Factory.postBus(bus_type)
        return super.httpRequestWithBody('POST', URL_BUS, body).then((res) => { console.log(res) })
    }

    static criar_parada(busstop_type) {
        let body = Factory.postBusstop(busstop_type)
        return super.httpRequestWithBody('POST', URL_BUSSTOP, body).then((res) => { console.log(res) })
    }

    static post_check(check_type) {
        let body = Factory.postCheck(check_type)
        return super.httpRequestWithBody('POST', URL_CHECK, body).then((res) => { console.log(res) })
    }

    static buscar_parada_id() {
        let id = 1
        return super.httpRequestWithoutBody('GET', `${URL_NEXTBUSES}/${id}`).then((res) => { console.log(res) })
    }

    static buscar_bus_id() {
        return super.httpRequestWithoutBody('GET', URL_BUS_ID).then((res) => { console.log(res) })
    }
}