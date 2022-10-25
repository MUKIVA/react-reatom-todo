import { useAction } from "@reatom/npm-react";
import { removeTask, toggleTask } from "../model/actions";


export const TaskListElement = (props : any) => {
    const toggle = useAction(toggleTask);    
    const del = useAction(removeTask)

    let model = props.model;

    return (
        <div className="App-task">
            <input onChange={() => { toggle(!model.isDone, model) }} className="Task-checkBox" type="CheckBox" checked={model.isDone} />
            <span className="Task-text" >{model.text}</span>
            <button onClick={() => { del(model) }} className="Task-delButton">Del</button>
        </div>
    )
}