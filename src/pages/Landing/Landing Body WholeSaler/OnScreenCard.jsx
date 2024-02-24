import { Box, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
// import profilePic from "../../../assets/Profile Pic.png"
import { useAuth } from '../../../components/AuthContext/AuthContext';
const OnScreenCard = ({profilePic}) => {
      const authContext=useAuth();
      const [userDetails,setUserDetails]=useState()
      useEffect(() => {
            authContext.findUserDetails();
            // console.log(authContext.userDetails);
            setUserDetails(authContext.userDetails)
        }, [authContext]);
      
      return (
            <Box backgroundColor={"#D4CDC1"} height={""} width={"100%"} mt={10} borderRadius={"30px"}>
      {userDetails ? (
        <Box display="flex">
          <Image height="100%" p="50px" width="40%" borderRadius="30px" objectFit="cover" src={profilePic} />
          <Box flexDir="column" display="flex" ml="15%" mt="5%" fontFamily="Karantina" fontSize={{ base: 80, sm: 30, md: 40, lg: 60, xl: 80, "2xl": 100 }}>
            <Box>UserName: {userDetails.username}</Box>
            <Box>Email: {userDetails.email}</Box>
            <Box>Shop Name: {userDetails.shopname}</Box>
            <Box>Location: {userDetails.address}</Box>
          </Box>
        </Box>
      ) : (
        <Box>Loading user details...</Box>
      )}
    </Box>
  )
}

export default OnScreenCard