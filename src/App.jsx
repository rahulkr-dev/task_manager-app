import React,{useContext} from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import { AppContext } from './context/AppContext';
import {Column} from "./components"

const App = () => {
  const {todoData} = useContext(AppContext);
  console.log(todoData)
  return (
    <ChakraProvider>
        <>
        {
          todoData.columnOrder.map(columnId=>{
            let column = todoData.columns[columnId];
            let tasks = column.taskIds.map(taskId=>todoData.tasks[taskId]);
            return <Column column={column} tasks={tasks} />
          })
        }
        </>
    </ChakraProvider>
  )
}

export default App