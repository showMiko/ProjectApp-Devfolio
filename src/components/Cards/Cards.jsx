import React from 'react'
import { Card, Button, ButtonGroup, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, VStack, HStack, SimpleGrid, Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom/dist'

const Cards = () => {
    const navigate=useNavigate();
    return (
    <Card maxW='sm' bgColor={"#EBE3D5"} onClick={()=>{navigate('/wholesaler/products/1')}} cursor='pointer'>
        <CardBody>
            <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
            <Stack mt='4' spacing='2'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text color='gray.500'>
                    This sofa is perfect for modern tropical spaces, baroque inspired.
                </Text>
                <Box display={"flex"} width={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                    <Box color='gray.500' size='md'>
                        Rs. 450
                    </Box>
                    <Button variant='ghost' colorScheme='black.800'fontWeight={"bold"} size='lg' display={"flex"}>
                        Buy
                    </Button>
                </Box>
            </Stack>
        </CardBody>
    </Card>
  )
}

export default Cards