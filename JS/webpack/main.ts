import { Decorator } from "./decorator";

console.log(new Decorator().decorate("Hello TS"));

const first_worker = new Worker('./build/workers/first_worker.js');
const second_worker = new Worker('./build/workers/second_worker.js');

first_worker.onmessage = (e) => 
{
    console.log("From first worker:", e.data);
}
first_worker.postMessage("Hello from worker");

second_worker.onmessage = (e) => 
{
    console.log("From second worker:", e.data);
}

second_worker.postMessage(1000000);