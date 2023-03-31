import { Text } from '@chakra-ui/react'
import React from 'react'

const Task = ({task}) => {
  return (
 <Text cursor={"pointer"} p="6px 12px" boxShadow={"md"} borderColor={"gray.400"} m="5px">
    {task.content}
 </Text>
  )
}

export default Task