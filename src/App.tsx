import React from 'react';
import './App.css';
import { InputTask } from './controls/InputTask';
import './model/store';
import { TaskList } from './controls/TaskList';

function App()
{
    return (
        <div className="App">
            <header className="App-header">
                ToDo List
            </header>
            <div className='App-body'>
                <InputTask />
                <TaskList />
            </div>
        </div>
    );
}

export default App;
