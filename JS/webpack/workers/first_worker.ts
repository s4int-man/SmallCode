import { Decorator } from "../decorator";

onmessage = (e: any) => 
{
    const message = new Decorator().decorate(e.data);

    postMessage(message);
}