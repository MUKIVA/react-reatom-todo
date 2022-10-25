import React from 'react';
import './App.css';
import { InputTask } from './controls/InputTask';
import './model/store';
import { TaskList } from './controls/TaskList';
import { Layout } from 'antd'

const { Header, Content } = Layout

function App()
{
    return (
        <Layout className="App">
            <Header className="App-header">
                ToDo List
            </Header>
            <Content className='App-body'>
                <InputTask />
                <TaskList />
            </Content>
        </Layout>
    );
}

export default App;
