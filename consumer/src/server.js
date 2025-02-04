
import { connexion } from "./redpanda/consumer.js";



async function start() {
    await connexion()
}

start()