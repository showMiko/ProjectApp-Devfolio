import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Banner from '../../components/Banner/Banner'
import MottoBanner from '../../components/Banner/MottoBanner'
import WhatWeDo from '../../components/Description/WhatWeDo'
import Footer from '../../components/Footer/Footer'
import eclipse from "../../assets/Eclipse.png"
const HomePage = () => {
  return (
    <Box width={"100%"} backgroundColor={"#F3EEEA"}>
      <Box  maxW={"100%"} display={"flex"} justifyContent={"flex-end"}>
        <Image zIndex={2} overflow={"hidden"} pos={"absolute"} src={eclipse}/>
      </Box>
      <Box p={"50px"} pos={"relative"} zIndex={3}>
        <Navbar/>
        <Banner/>
      </Box>
      <MottoBanner/>
      <WhatWeDo/>
      <Footer/>
    </Box>
  )
}

export default HomePage