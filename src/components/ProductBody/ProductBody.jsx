import React from 'react'
import { Box, Button, FormControl, HStack, Icon, Input, InputGroup, InputLeftElement, Select, SimpleGrid, Stack, Text  } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa";
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';

const WholeSalerBody = () => {
  return (
    <Box p={5} px={20}>
        <HStack spacing={5} justifyContent={"center"}>
            <Select variant='flushed' placeholder='All' width={"20%"} bgColor={"#EBE3D5"}>
                <option>Shirts</option>
                <option>Jeans</option>
            </Select>
            <Text width={"10%"} textAlign={"center"}>Sorted By</Text>
            <Select variant='flushed' placeholder='New' width={"20%"} bgColor={"#EBE3D5"}>
                <option>Date</option>
                <option>A-Z</option>
            </Select>
            <InputGroup width={"20%"} border={"ActiveBorder"}>
                <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={FaSearch} color="gray.400" />}
                />
                <Input type="text" placeholder="Search the store" />
            </InputGroup>
            <Button colorScheme='teal' width={"220px"} backgroundColor={"#B0A695"} color={"black"} borderRadius='lg'>
                <Link to="/products/new" className="link">
                    Add item
                </Link>
            </Button>
        </HStack>
        <Box pt={"20px"}>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' alignItems={"center"}>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </SimpleGrid>
        </Box>
    </Box>
  )
}

export default WholeSalerBody