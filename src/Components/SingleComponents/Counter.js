import { Box, Flex, Button, Heading} from '@chakra-ui/react'
import React, { useState, useEffect} from 'react'

function Counter() {

    const number = () => Math.floor(Math.random()*10000000000)
    const [randNum, setRandNum] = useState(number())


    useEffect(() => {
        const intervalId = setInterval(() => {
            setRandNum(prevRandNum => prevRandNum + Math.floor(Math.random()*10));
        }, 1500);
        return () => clearInterval(intervalId);
    }, []);

  return (
    <Box bg="#2b3748" width="childern.width" height="childern.height" borderRadius={10} fontWeight="bold">
        <Flex direction="column" align="center" margin={3}>
            <Heading fontSize="2xl" textColor="white">{randNum}</Heading>
            <Heading fontSize="xs" textColor="white" noOfLines={1}>people already bankrupt and counting</Heading>
        </Flex>    
    </Box>
  )
}

export default Counter