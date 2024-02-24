import { Box, Button, Container, Divider, Flex, FormControl, HStack, Heading, Image, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SpecificNavbar from '../../components/wholesaler/SpecificNavbar/specificNavbar'
import Carousel from "../../components/Carousel/Carousel"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdShoppingCart } from "react-icons/md";
import { RiExpandUpDownFill } from "react-icons/ri";
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import img5 from "../../assets/img5.jpg"
import img6 from "../../assets/img6.jpg"
import img7 from "../../assets/img4.jpg"
import img8 from "../../assets/img5.jpg"
import img9 from "../../assets/img6.jpg"

const ProductDetails = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <Box maxW="100%" p="10" pr={"10"} pb={"10"} backgroundColor={"#F3EEEA"}>
        <SpecificNavbar />
        <Box py={6} >
            <Heading>Premium Pack of 3 Lee Cooper T Shirts</Heading>
            <Divider />
            {/* <Box maxW="800px" mx="auto" >
              <Carousel items={images.map((img, index) => <Image key={index} src={img} />)} />
            </Box> */}
            <Box maxW="auto" mx="auto" mt={"20px"} >
              <Carousel images={images} />
            </Box>
            <Box display={"flex"}>
              <Box alignItems={"flex-start"} flexDir={"column"} display={"flex"}>
                <Heading size={"md"}>Product Details</Heading>
                <Text width={"80%"}>tempora inventore? Beatae nostrum debitis perferendis reprehenderit maxime! Placeat doloribus reprehenderit ipsum quaerat debitis porro ex temporibus corrupti sed, tempora labore quisquam? Magnam explicabo commodi omnis nesciunt similique </Text>
              </Box>
                <Box display={"flex"} flexDirection={{sm:"col", md:"row", base:"row"}} justifyContent={"space-between"} spacing={4} align='center' alignItems={"center"}>
                {/* <Button colorScheme='teal' backgroundColor={"#B0A695"} color={"black"} rightIcon={<RiExpandUpDownFill />}>
                  1
                </Button> */}
                <FormControl >
                  <NumberInput max={20} min={1} colorScheme='teal' backgroundColor={"#B0A695"} width={"40%"}>
                    <NumberInputField placeholder={"1"}/>
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <Button mr={10} colorScheme='teal' width={"150px"} backgroundColor={"#B0A695"} color={"black"}>
                  Buy Now
                </Button>
                <Button colorScheme='teal' width={"220px"} backgroundColor={"#B0A695"} color={"black"} rightIcon={<MdShoppingCart />} >
                  Add to Cart
                </Button>
              </Box>
            </Box>
            <VStack pt={"10"} alignItems={"flex-start"}>
              <Heading size={"md"}>Return Policy</Heading>
              <Text width={"md:80%, sm:100%"}>tempora inventore? Beatae nostrum debitis perferendis reprehenderit maxime!</Text>
            </VStack>
        </Box> 
    </Box>
  )
}

export default ProductDetails