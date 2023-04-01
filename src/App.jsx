import React, { useContext } from 'react'
import { ChakraProvider, Flex,Box } from '@chakra-ui/react';
import { AppContext } from './context/AppContext';
import { Column } from "./components";
import { DragDropContext } from 'react-beautiful-dnd';
import InputTodo from './components/InputTodo';
import Navbar from './components/Navbar';

const App = () => {
  const { todoData, setTodoData } = useContext(AppContext);
  console.log(todoData);

  const onDragEnd = (result) => {
    console.log(result)
    const { source, destination, draggableId } = result;
    if (destination == null) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return
    if (destination.droppableId === source.droppableId && destination.index == !source.index) {
      const column = todoData.columns[destination.droppableId];
      const new_taskIds = Array.from(column.taskIds);
      new_taskIds.splice(source.index, 1);
      new_taskIds.splice(destination.index, 0, draggableId);

      let column_update = {
        ...column,
        taskIds: new_taskIds
      };
      let state_update = {
        ...todoData,
        columns: {
          ...todoData.columns,
          [destination.droppableId]: column_update
        }
      }
      // now update state;
      setTodoData(state_update);
      return
    };
    const startCol = todoData.columns[source.droppableId];
    const endCol = todoData.columns[destination.droppableId];

    const startTaskIds = Array.from(startCol["taskIds"]);
    startTaskIds.splice(source.index, 1);

    const endTaskIds = Array.from(endCol["taskIds"]);
    endTaskIds.splice(destination.index, 0, draggableId);
    const state_update = {
      ...todoData,
      columns: {
        ...todoData.columns,
        [source.droppableId]: {
          ...todoData.columns[source.droppableId],
          taskIds: startTaskIds
        },
        [destination.droppableId]: {
          ...todoData.columns[destination.droppableId],
          taskIds: endTaskIds
        },
      }
    }

    setTodoData(state_update);



  }
  return (
    <ChakraProvider>
      <Navbar />
      <Box h="90vh" borderRadius={"1rem"} w="100%" m={"auto"} bg={"gray.600"} p="6rem 3rem" 
      clipPath={"polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"}>
        <InputTodo />
        <DragDropContext onDragEnd={onDragEnd}>
          <Flex gap="0rem" wrap={"wrap"} justifyContent={"center"}>
            {
              todoData.columnOrder.map(columnId => {
                let column = todoData.columns[columnId];
                let tasks = column.taskIds.map(taskId => todoData.tasks[taskId]);
                return <Column key={columnId} column={column} tasks={tasks} />
              })
            }
          </Flex>
        </DragDropContext>
      </Box>
    </ChakraProvider>
  )
}

export default App