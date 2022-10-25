import { useAtom } from "@reatom/npm-react";
import { TaskListElement } from "./TaskListElement";
import { TaskModel } from "../model/TaskModel";
import { taskListAtom } from "../model/atoms";
import { v4 as uuidv4 } from 'uuid';

export const TaskList = () => {
    const [list] = useAtom(taskListAtom);

    return (
        <>
            { list.map((model: TaskModel) => {
                return (<TaskListElement key={uuidv4()} model={model} />)
                })}
        </>
    )   
}