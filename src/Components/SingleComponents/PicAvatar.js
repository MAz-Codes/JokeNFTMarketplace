import React from 'react'
import { Avatar, Box, Text, Flex } from '@chakra-ui/react'
import { useState } from 'react'



function PicAvatar() {

 const [logged, setLogged] = useState(false);

  const handleClick = () => {
    setLogged(prevState=> !prevState)
  }

  const picUrl  = () => {
    if (logged){
      return 'https://bit.ly/dan-abramov'
    } 
  }

  const logText = () => {
    if (logged){
      return "Log Out"
    } else {
      return "Log In"
    }
  }
  
  return (
    <Flex onClick={handleClick} direction="column" align="center" marginRight="5" justify="flex-start">
      <Avatar src={picUrl()} bg="black"/>
      <Text 
        fontSize="2xs" 
        fontFamily="sans-serif"
        fontWeight="bold" 
        textColor="black"
      >{logText()}</Text>
      
    </Flex>
  )
}

export default PicAvatar