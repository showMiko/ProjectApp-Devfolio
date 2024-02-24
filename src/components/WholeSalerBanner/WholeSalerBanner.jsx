import { Box } from '@chakra-ui/react'
import React from 'react'

const WholeSalerBanner = () => {
  return (
    <Box height={"300px"} justifyContent={"center"} display={"flex"} alignItems={"center"}>
      <Box fontFamily={"Karantina"} display={"flex"} mt={"100px"} >
        <Box
          pos={"absolute"}
          mt={"-120px"}
          ml={"-60px"}
          fontSize={"200px"}
          fontFamily={"Just Me Again Down Here"}
          color={"#9F7757"}
        >
          "
        </Box>
        <Box display={"flex"} fontSize={"5em"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} textAlign={"center"}>
            YOUR PROFIT IS OUR PROMISE
        </Box>
      </Box>
    </Box>
  )
}

export default WholeSalerBanner