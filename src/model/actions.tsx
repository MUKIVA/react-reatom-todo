import { action } from '@reatom/core'
import React from 'react';
import { inputTextAtom, taskListAtom } from './atoms';
import { TaskModel } from './TaskModel';

export const changeText = action(
    (ctx, event : React.ChangeEvent<HTMLInputElement>) =>
    {
        inputTextAtom(ctx, event.currentTarget.value)
    }
);

export const addTask = action(
    (ctx) => 
    {
        let taskText = ctx.get(inputTextAtom);
        if (taskText.length === 0) return;
        let trimmedText = taskText.trim();
        const tasks = ctx.get(taskListAtom);
        tasks.push(new TaskModel(trimmedText));
        taskListAtom(ctx, new Array<TaskModel>(...tasks));
    }
);

export const toggleTask = action(
    (ctx, event, task) =>
    {   
        const tasks = ctx.get(taskListAtom);
        const index = tasks.indexOf(task);
        if (index === -1 || index === undefined) return;
        tasks.at(index)!.isDone = event;
        taskListAtom(ctx, new Array<TaskModel>(...tasks))
    }
);

export const removeTask = action(
    (ctx, task : TaskModel) => 
    {
        debugger
        let tasks = ctx.get(taskListAtom);
        const index = tasks.indexOf(task); 
        if (index !== -1 && index !== undefined)
            tasks.splice(index, 1);
        taskListAtom(ctx, new Array<TaskModel>(...tasks));
    }
);
