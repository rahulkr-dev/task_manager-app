import React,{useContext} from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import { AppContext } from './context/AppContext';
import {Column} from "./components";
import { DragDropContext } from 'react-beautiful-dnd';

const App = () => {
  const {todoData,setTodoData} = useContext(AppContext);
  console.log(todoData);

  const onDragEnd = (result)=>{
    console.log(result)
    const {source,destination,draggableId} = result;
    if(destination==null) return;
    if(destination.droppableId===source.droppableId && destination.index===source.index) return;
    const column = todoData.columns[destination.droppableId];
    const new_taskIds = Array.from(column.taskIds);
    new_taskIds.splice(source.index,1);
    new_taskIds.splice(destination.index,0,draggableId);

    let column_update = {
      ...column,
      taskIds:new_taskIds
    };
    let state_update = {
      ...todoData,
      columns:{
        ...todoData.columns,
        [destination.droppableId]:column_update
      }
    }
    // now update state;
    setTodoData(state_update);

   }
  return (
    <ChakraProvider>
      <DragDropContext onDragEnd={onDragEnd}>
        <>
        {
          todoData.columnOrder.map(columnId=>{
            let column = todoData.columns[columnId];
            let tasks = column.taskIds.map(taskId=>todoData.tasks[taskId]);
            return <Column key={columnId} column={column} tasks={tasks} />
          })
        }
        </>
        </DragDropContext>
    </ChakraProvider>
  )
}

export default App