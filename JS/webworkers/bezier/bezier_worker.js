function calc_bezier(p1, p2, t)
{
    //(0, 0) - Первая точка
	//(1, 1) - Последняя точка
	//p1 и p2 - Опорные точки
	const x = (3 * (1 - t) ** 2 * t * p1.x) +
        (3 * (1 - t) * (t ** 2) * p2.x) +
        (t ** 3);

    const y = (3 * (1 - t) ** 2 * t * p1.y) +
        (3 * (1 - t) * (t ** 2) * p2.y) +
        (t ** 3);

    return { x, y };
}

function calc_translations(steps, point1, point2, from, to)
{
    let p1 = performance.now();
    const keyFrames = [...Array(steps).keys()].map((num) =>
    {
        const bezierPoint = calc_bezier(point1, point2, 1 / steps * (num + 1));
        const newPoint = {
            x: from.x + (to.x - from.x) * bezierPoint.x,
            y: from.y + (to.y - from.y) * bezierPoint.y
        };
        return { transform: `translate(${newPoint.x}px, ${newPoint.y}px)` }
    });
    let p2 = performance.now();
    console.log(p2 - p1);
    return keyFrames;
}

onmessage = function(e)
{
    let steps = e.data.steps;
    let point1 = e.data.point1;
    let point2 = e.data.point1;
    let from = e.data.from;
    let to = e.data.to;

    const translations = calc_translations(steps, point1, point2, from, to);
    this.self.postMessage(translations);
}