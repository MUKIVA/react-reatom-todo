
export class TaskModel
{
    public text: string;
    public isDone: boolean;

    constructor(text: string, isDone: boolean = false)
    {
        this.text = text;
        this.isDone = isDone;
    }
}
