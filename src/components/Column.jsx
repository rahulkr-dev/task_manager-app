import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Task from './Task'
import { Droppable } from 'react-beautiful-dnd'

const Column = ({ tasks, column }) => {
    return (
        <Box bg={"blackAlpha.500"} border="2px solid gray" boxShadow={"lg"} m="2rem" w="max-content" pt="1rem">
            <Heading color="lightblue" pb=".7rem" textAlign={"center"} fontSize={"1.3rem"}>{column.title} :
            <Text fontSize={"1.5rem"} color={"gray.200"} fontWeight={"bold"} fontFamily={"cursive"} textShadow={"dark-lg"} ml="10px" as="span">{column.taskIds.length}</Text>
            </Heading>
            <Droppable droppableId={column.id}>
                {
                    (provider, snapshot) => (

                        <Box
                            ref={provider.innerRef}
                            {...provider.droppableProps}
                            bg={snapshot.isDraggingOver ? "gray.100" : "transparent"}
                            p="1rem"
                            minW={"100px"}
                            w="250px"
                            // h="full"
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