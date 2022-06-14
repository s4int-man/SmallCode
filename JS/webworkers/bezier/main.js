let worker = new Worker("bezier_worker.js");

worker.onmessage = function(e)
{
    let p2 = performance.now();
    console.log(p2 - p1);
    console.log(e.data);
}

let p1 = performance.now();
worker.postMessage({
    steps: 100,
    point1: { x: 0, y: 0.75},
    point2: { x: 1, y: 0.25},
    from: { x: 0, y: 0 },
    to: { x: 100, y: 100 }
});