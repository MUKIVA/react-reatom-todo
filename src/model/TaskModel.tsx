
export class TaskModel
{
    // public key: string
    public text: string
    public isDone: boolean

    constructor(text: string, isDone: boolean = false)
    {
        // this.key = key;
        this.text = text;
        this.isDone = isDone;
    }
}
