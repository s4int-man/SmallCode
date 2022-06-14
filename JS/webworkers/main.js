var myWorker = new Worker("analytics.js");

myWorker.onmessage = function(e) {
    console.log('Message received from worker', e.data);
}

myWorker.postMessage("SCREEN_GIFTS/SEND_FROM_MANY_MENU");
console.log('Message posted to worker');