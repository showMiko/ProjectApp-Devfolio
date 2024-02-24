import { Box, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/MottoBannerImage.png";
import "./banner.css";
const MottoBanner = () => {
  return (
    <Box className="motto-banner-container">
      <Image
        position={"absolute"}
        width={{md:"500px",sm:"0px"}}
        mt={"-265px"}
        className="business-image"
        src={logo}
      ></Image>
      <Box
        mt={"250px"}
        backgroundColor={"#B0A695"}
        height={"400px"}
        fontSize={"80px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box fontFamily={"Karantina"} display={"flex"}>
          <Box
            pos={"absolute"}
            mt={"-120px"}
            ml={"-60px"}
            fontSize={"200px"}
            fontFamily={"Just Me Again Down Here"}
          >
            "
          </Box>
          <Box>We Help You Sell Better</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MottoBanner;
