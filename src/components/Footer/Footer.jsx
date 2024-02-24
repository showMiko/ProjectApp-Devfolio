import { Box } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box fontSize={"20px"} width={"100%"} backgroundColor={"#EBE3D5"} display={"flex"} justifyContent={"space-between"}>
      <Box display={"flex"} flexDir={"column"} p={"10px"}>
            <Box>Contact Us</Box>
            <Box>Number</Box>
      </Box>
      <Box display={"flex"} flexDir={"column"} p={"10px"}>
            <Box>YOU_PROF</Box>
            <Box>Find Your Business Here</Box>
      </Box>
      <Box display={"flex"} flexDir={"column"} p={"10px"}>
            <Box>Get Our Support</Box>
            <Box>Sample@Gmail.com</Box>
      </Box>
    </Box>
  )
}

export default Footer