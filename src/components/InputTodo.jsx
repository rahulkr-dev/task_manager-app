import { Input,Flex,Button } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import {v4 as uuidv4} from "uuid"
import { AppContext } from '../context/AppContext';

const InputTodo = () => {
    const [text,setText] = useState('');
    const {todoData,setTodoData} = useContext(AppContext);

    const handleClick = (e)=>{
        // alert(text)
        // LOGIC
        const id = uuidv4()
        // console.log(id)
        const taskData = {
            id,content:text
        };
        // State update logic inside object
        const state_update = {
            ...todoData,
            tasks:{
                ...todoData.tasks,
                [id]:taskData
            },
            columns:{
                ...todoData.columns,
                column_1:{
                    ...todoData.columns.column_1,
                    taskIds:[...todoData.columns.column_1.taskIds,id]
                }
            }
        };
        setTodoData(state_update);
        setText("")
    }
  return (
    <Flex w="max-content" margin={'auto'}>
        <Input value={text} onChange={({target})=>setText(target.value)} pl={"15px"} variant={"unstyled"} bg="gray.200" placeholder='Enter task here...' />
        <Button onClick={handleClick} colorScheme='gray' >Add Task</Button>
    </Flex>
  )
}

export default InputTodo