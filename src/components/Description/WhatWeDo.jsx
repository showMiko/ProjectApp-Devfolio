import { Box, Button} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  return (
    <Box
      p={"50px"}
      mt={"100px"}
      display={"flex"}
      justifyContent={"center"}
      flexDir={"column"}
      alignItems={"center"}
      fontSize={"80px"}
    >
      <Box fontFamily={"Karantina"} display={"flex"}>
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
        <Box>What We Do</Box>
      </Box>
      <Box
        width={"90%"}
        height={"3px"}
        borderRadius={"20px"}
        backgroundColor={"black"}
      ></Box>
      <Box
        width={"85%"}
        fontSize={"50px"}
        fontFamily={"Karantina"}
        textAlign={"center"}
        fontWeight={"light"}
      >
        So you have a small business that you wanna grow right? Are you tired of
        trying to contact your whole seller or retailer to get your product?
        <br />
        Well, Wait no more. With our app you will be able to reach out to your
        closest whole seller or retailer and get the job done.
        <br /> One time payment becoming an issue?
        <br />
        We have a solution for that as well. With our new payment system, you
        may pay the amount to your seller as you like. Everything will be
        tracked down so there is no chance of you getting cheated on.
        <br /> So have a Great Experience.
        <br /> We are available anytime for your help.
      </Box>

      <Box fontFamily={"Karantina"} display={"flex"} mt={"150px"} >
        <Box
          pos={"absolute"}
          mt={"-120px"}
          ml={"-40px"}
          fontSize={"200px"}
          fontFamily={"Just Me Again Down Here"}
          color={"#9F7757"}
        >
          "
        </Box>
        <Box display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} textAlign={"center"}>
        So Are You Ready To Embark on a Remarkable Journey <br/> With US?
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={"-120px"}>
        <Link to={"/getstarted"}>
        <Button size={'lg'} style={{color:'black',backgroundColor:'#B0A695',width:"200px",height:"70px"}}  mt={200}>Lets Get Started</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default WhatWeDo;