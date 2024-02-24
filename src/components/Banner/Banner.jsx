import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'
import logo from "../../assets/HomePageBannerImage.png"
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}> 
      <Box mt={20} width={"65%"} className='LeftBanner'>
        <Box>
          <Box fontSize={{md:80,sm:50}}>Push Your Business</Box>
          <Box fontSize={{md:40,sm:20}}>"Your Profit is Our Promise"</Box>
        </Box>
        <Link to={"/getstarted"}>
        <Button size={'lg'} style={{color:'black',backgroundColor:'#B0A695'}}  mt={200}>Login/Signup</Button>
        </Link>
      </Box>
      <Box mt={20} width={"35%"}>
        <Image src={logo} />
      </Box>
    </Box>
  )
}

export default Banner