import { Text } from '@chakra-ui/react'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const Task = ({ task,index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {
                (provider) => (
                    <Text 
                    ref={provider.innerRef}
                    {...provider.draggableProps}
                    {...provider.dragHandleProps}
                    cursor={"pointer"} p="6px 12px" boxShadow={"md"} borderColor={"gray.400"} m="5px">
                        {task.content}
                    </Text>
                )
            }
        </Draggable>

    )
}

export default Task