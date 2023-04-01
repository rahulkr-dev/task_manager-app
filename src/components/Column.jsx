import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Task from './Task'
import { Droppable } from 'react-beautiful-dnd'

const Column = ({ tasks, column }) => {
    return (
        <Box border="2px solid gray" boxShadow={"lg"} m="2rem" w="max-content" py="1rem">
            <Heading mb=".7rem" textAlign={"center"} fontSize={"1.3rem"}>{column.title}</Heading>
            <Droppable droppableId={column.id}>
                {
                    (provider, snapshot) => (

                        <Box
                            ref={provider.innerRef}
                            {...provider.droppableProps}
                            bg={snapshot.isDraggingOver ? "lightcoral" : "white"}
                            p="1rem"
                            minW={"100px"}
                            w="250px"
                        >
                            {
                                tasks.map((task, index) => <Task index={index} key={task.id} task={task} />)
                            }
                            {provider.placeholder}
                        </Box>

                    )
                }

            </Droppable>
        </Box>
    )
}

export default Column