import { useAction, useAtom } from '@reatom/npm-react'
import { addTask, changeText } from '../model/actions';
import { inputTextAtom } from '../model/atoms';
import { Button, Input } from 'antd'

export const InputTask = () => {
    const [text] = useAtom(inputTextAtom)
    const add = useAction(addTask)
    const inputTextChange = useAction(changeText)

    return (

        <div className='App-inputTask'>
            <Input onChange={inputTextChange} type="text" value={text} />
            <Button type="primary" onClick={add} >Add task</Button>
        </div>
    )
}
