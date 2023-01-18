import React from "react";
import Navbar from "./Components/SingleComponents/Navbar";
import Buy from "./Components/Pages/Buy";
import Home from "./Components/Pages/Home";
import { ChakraProvider, Spacer } from "@chakra-ui/react";
import { Box, Text, Button, Avatar, VStack, HStack } from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider>  
        <Navbar/>
        <Home/>
        <Buy/>
    </ChakraProvider>
  );
}

export default App;
