import { Box,Heading,Text } from '@chakra-ui/react'
import React from 'react'
import Task from './Task'

const Column = ({tasks,column}) => {
  return (
  <Box border="2px solid gray" boxShadow={"lg"} m="2rem" w="max-content" p="1rem">
    <Heading fontSize={"1.3rem"}>{column.title}</Heading>
    {
        tasks.map(task=><Task task={task} />)
    }
  </Box>
  )
}

export default Column