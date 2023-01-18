import { chakra, Flex } from '@chakra-ui/react'
import { Box, HStack, Spacer } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import PicAvatar from './PicAvatar'

function Navbar() {
  return (
    <Box boxShadow="inner" /*bg="#5abfbf"*/ bg="white">
        <Flex justify="flex" align="center">  
            <Logo/>
            <Spacer/>
            <Menu/>
            <PicAvatar/>
        </Flex>  
    </Box>
  )
}

export default Navbar