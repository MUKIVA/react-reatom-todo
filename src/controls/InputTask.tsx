import { useAction, useAtom } from '@reatom/npm-react'
import { addTask, changeText } from '../model/actions';
import { inputTextAtom } from '../model/atoms';

export const InputTask = () => {
    const [text] = useAtom(inputTextAtom)
    const add = useAction(addTask)
    const inputTextChange = useAction(changeText)
    
    return (
        
        <div>
            <input onChange={inputTextChange} type="text" value={text} />
            <button onClick={add} >Add task</button>
        </div>
    )
}