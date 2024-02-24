import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import bg from "../../assets/SignUpLogin.png"
import "./loginSignup.css"
import { useNavigate } from 'react-router-dom'

const SelectLoginSignup = () => {
      const navigate=useNavigate();
      const handleSignUp=()=>{
            navigate("/signup")
      }
      const handleLogin=()=>{
            navigate("/login")
      }
  return (
    <Box className='background-image'>
      <Box mt={"40vh"} ml={"70%"} fontFamily={"Karantina"} fontSize={70} color={"#D7BD61"} textst>
      <Box style={{ textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }} onClick={handleLogin}>Login</Box>
      <Box
        width={"90%"}
        height={"3px"}
        borderRadius={"20px"}
        backgroundColor={"black"}
        mt={-4}
      ></Box>
      <Box style={{ textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }} onClick={handleSignUp}>Signup</Box>
      <Box
        width={"90%"}
        height={"3px"}
        borderRadius={"20px"}
        backgroundColor={"black"}
        mt={-4}
      ></Box>
      </Box>
    </Box>
  )
}

export default SelectLoginSignup