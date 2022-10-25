import { useAction } from "@reatom/npm-react";
import { removeTask, toggleTask } from "../model/actions";
import { Button, Checkbox } from 'antd'


export const TaskListElement = (props : any) => {
    const toggle = useAction(toggleTask);    
    const del = useAction(removeTask)

    let model = props.model;

    return (
        <div className={`App-task ${ model.isDone ? "Task-check" : "" }`}>
            <Checkbox 
                className="Task-checkBox"
                onChange={() => { toggle(!model.isDone, model) }}   
                checked={model.isDone} />
            <span className="Task-text" >{model.text}</span>
            <Button className="Task-delButton" type="ghost" onClick={() => { del(model) }} >Del</Button>
        </div>
    )
}