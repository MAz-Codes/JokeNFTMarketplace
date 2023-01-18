import React from 'react'
import { Box, Text, Heading, Center, VStack, Button } from '@chakra-ui/react'
import Counter from '../SingleComponents/Counter'
function Home() {
  return (
    <Box  boxShadow="inner" /*bg="#e5f0ff"*/ 
          backgroundImage="url('https://images.unsplash.com/photo-1645731504684-0f6f9b73f8bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
          backgroundPosition="center"
        
          >
       
       <Center minHeight="620px" maxHeight= "100%">
            <VStack spacing={6}>
                 <Heading align={"center"} size="4xl" color="#2c3748"
                 >Invest in NFTs</Heading>
                <Heading align={"center"} size="md" color="#2c3748"
                >and become homeless in just a month </Heading>
                <Counter/>
            </VStack>    
        </Center>
    </Box>
  )
}

export default Home