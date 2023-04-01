import { Flex,Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Flex bg="blackAlpha.100" p="1rem" justify={"center"} align={"center"} mb="2rem">
        <Text textShadow={"2xl"} fontSize={"1.5rem"} letterSpacing={"7px"} _firstLetter={{fontWeight:"bold",fontSize:"2rem"}} textTransform={"capitalize"} fontFamily={"fantasy"}>
            Task App
        </Text>
    </Flex>
  )
}

export default Navbar