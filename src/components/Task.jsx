import { Text } from '@chakra-ui/react'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const Task = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {
                (provider, snapshot) => (
                    <Text
                        ref={provider.innerRef}
                        {...provider.draggableProps}
                        {...provider.dragHandleProps}
                        bg={snapshot.isDragging?"lightblue":"white"}
                        fontWeight={snapshot.isDragging?"bolder":"inherit"}
                        cursor={"pointer"} p="6px 12px" boxShadow={"md"} borderColor={"gray.400"} m="5px" textTransform={"capitalize"} fontFamily={"cursive"} 
                        borderRadius={"5px"}
                    >
                        {index+1} : 
                        {task.content}
                    </Text>
                )
            }
        </Draggable>

    )
}

export default Task