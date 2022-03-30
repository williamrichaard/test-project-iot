import Rest from "./common/_bus.service"

const URL_CHECK = '/check'

export class Bus extends Rest {

    static post_check() {
        let body = {
            "bus_id": 0,
            "busStop_id": 0
        }
        return super.httpRequestWithBody('POST', URL_CHECK, body).then((res) => { console.log(res) })
    }
}