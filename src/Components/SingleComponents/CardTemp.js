import React from 'react'
import { Box,
    Wrap,
    Heading,
    Divider,
    CardFooter,
    ButtonGroup,
    Button, 
    Card, 
    Image, 
    Text, 
    CardBody,
    Spacer,
    Stack,
    HStack,
    Flex,
    Grid} from '@chakra-ui/react'

function CardTemp({infos}) {



  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={0.5}>
        {infos.map((info) => (
            <Card
            margin={2}
            key= {info.id}
            maxWidth={"auto"}
            minWidth="auto" 
            borderRadius="lg"   
            bgGradient="linear(to-b, #DECBA4, #60c9c9)"  >
                <CardBody>
                    <Image
                    src={info.url}
                    alt={info.alt}
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{info.title}</Heading>
                    <Text>
                        {info.body}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        ${info.price}
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        
        ))}
    </Grid>    
  )
}

export default CardTemp