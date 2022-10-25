import { atom } from '@reatom/core';
import { TaskModel } from './TaskModel';


export const inputTextAtom = atom('');

export const taskListAtom = atom(new Array<TaskModel>());

export const appAtom = atom([inputTextAtom, taskListAtom]);