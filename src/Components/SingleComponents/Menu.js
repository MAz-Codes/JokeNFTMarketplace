import { HStack, Link, useColorMode, Box } from '@chakra-ui/react'
import React from 'react'

const theme = {
  colors: {
    light: {
      text: "#2c3748",
      hover: "#88aad9"
    },
    dark: {
      text: "white",
      hover: "orange"
    }
  }
}

function Menu() {
  const { colorMode } = useColorMode()
  return (
    <HStack margin={5} marginRight={20} spacing={8}>
        <Link 
        textColor={theme.colors[colorMode].text}
        fontWeight="bold"
        _hover={{ color: theme.colors[colorMode].hover }}
        >Home</Link>

        <Link 
        textColor={theme.colors[colorMode].text}
        fontWeight="bold"
        _hover={{ color: theme.colors[colorMode].hover }}
        >Buy</Link>

        <Link 
        textColor={theme.colors[colorMode].text}
        fontWeight="bold"
        _hover={{ color: theme.colors[colorMode].hover }}
        >Sell</Link>

        <Link 
        textColor={theme.colors[colorMode].text}
        fontWeight="bold"
        _hover={{ color: theme.colors[colorMode].hover }}
        >About Us</Link>

    </HStack>
  )
}

export default Menu