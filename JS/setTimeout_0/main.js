function square(a)
{
    return a*a;
}

function square_m()
{
    let p1 = performance.now();
    [...Array(1000000).keys()].forEach(a => {
        square(a);
    });
    let p2 = performance.now();
    console.log("Square perf:", p2 - p1);
}

console.log("1");
setTimeout(square_m, 0);

console.log("2");
let p1 = performance.now();
setTimeout(() => 
{
    let p2 = performance.now();
    console.log("Here perf:", p2 - p1);
}, 0);