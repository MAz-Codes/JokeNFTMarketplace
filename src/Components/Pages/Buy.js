
import { useState } from 'react'
import { Box,
    Spacer,
} from '@chakra-ui/react'
import CardTemp from '../SingleComponents/CardTemp'


function Buy() {

    const [infos, setInfos] = useState([
        {id: "1",
         url: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
         alt: 'A stupid Monkey',
         title: "A stupid fucking Monkey",
         body: "Buy this monkey and lose everything instantly! We gauranty money loss within 24 hours.I mean... it's a picture of a fucking monkey... are you mental???",
         price: "4.500"
        },

        {id: "2",
         url: 'https://images.livemint.com/img/2022/08/18/600x338/GoldenFurBoredApeNFT_1660822663931_1660822664058_1660822664058.JPG',
         alt: 'A stupid Monkey',
         title: "A stupid fucking Monkey",
         body: "Jesus Christ... people will buy any stupid shit if you just give them hope. Yeah yeah... to the fucking moon, I know I know...",
         price: "6.500"
        },

        {id: "3",
         url: 'https://www.motherjones.com/wp-content/uploads/2022/12/20221215TrumpNFT.png?resize=768,432',
         alt: 'A stupid Monkey',
         title: "A stupid fucking Monkey",
         body: "Buy this monkey and lose everything instantly! We gauranty money loss within 24 hours.I mean... it's a picture of a fucking monkey... are you mental???",
         price: "400"
        },

        {id: "4",
         url: 'https://info.sapphirecapitalpartners.co.uk/hubfs/1_XOA5d5gWRU_zdgB-DdQ-ig%20%282%29-min.webp',
         alt: 'A stupid Monkey',
         title: "A fucking Bargain",
         body: "Here, six of them in one picture. A freaking bargain if you ask me! Go print em out or something to feel good.",
         price: "17.500"
        }
     ])

  return (
    <Box 
    bg="white"
    boxShadow="dark-lg"
   // bgGradient="linear(to-b, #DECBA4, #60c9c9)"  
    minHeight="700px" 
    maxHeight= "auto" >
    <Spacer h={1}/>

      <CardTemp infos={infos}/>   

    </Box>
  )
}


export default Buy