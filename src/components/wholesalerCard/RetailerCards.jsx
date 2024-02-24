import React from 'react';
import { Box, Flex, Icon, Text, Image } from '@chakra-ui/react';
import { MdStar } from 'react-icons/md';
import image1 from "../../assets/Image 4.png"
const RetailerCards = ({ shopData }) => {
  return (
    <>
      <Flex flexWrap="wrap">
        {shopData.map((data, index) => (
          <Box key={index} width={{ base: "100%", sm: "50%", md: "33.33%" }} p="2">
            <Box m="5" bgColor="#D9D9D9" maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" position="relative">
              <Flex justifyContent="space-between" alignItems="center" p="4">
                <Text fontSize="xl" fontWeight="bold">{data.name}</Text>
                <Flex>
                  {[...Array(data.reviewStars)].map((_, starIndex) => (
                    <Icon key={starIndex} as={MdStar} color="yellow.400" />
                  ))}
                </Flex>
              </Flex>
              <Image src={image1} alt={data.name} />
              <Box p="4">
                <Text>Contact Number: {data.contactNumber}</Text>
                <Text>Email: {data.email}</Text>
                <Text>Product Type: {data.productType}</Text>
                <Text>Location: {data.location}</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
}

export default RetailerCards;
