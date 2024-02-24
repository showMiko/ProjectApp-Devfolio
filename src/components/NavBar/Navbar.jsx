import { Box } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box zIndex={20} display={"flex"} width={"100%"} justifyContent={"space-between"}>
      <Box fontSize={{base:80,sm:60,xl:100}} fontWeight={"bold"} fontFamily={'Karantina'}>You Prof</Box>
      {/* <Box display={"flex"} width={"20%"} justifyContent={"space-between"}> */}
            {/* <Box fontSize={20}>Home</Box> */}
            {/* <Box fontSize={20}>Concat US</Box> */}
      {/* </Box> */}
    </Box>
  )
}

export default Navbar