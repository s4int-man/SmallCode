import { Decorator } from "../decorator";

onmessage = (e: any) => 
{
    const result: number = [... new Array(e.data).keys()].reduce((prev, current) => 
    {
        return prev + current;
    });

    postMessage(new Decorator().decorate(result.toString()));
}