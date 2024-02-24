import React from 'react'
import { Box } from '@chakra-ui/react'
import WholeSalerBanner from '../../components/WholeSalerBanner/WholeSalerBanner'
import ProductBody from '../../components/ProductBody/ProductBody'
import SpecificNavbar from '../../components/wholesaler/SpecificNavbar/specificNavbar'
import { useAuth } from '../../components/AuthContext/AuthContext'
const Products = () => {
  const authContext=useAuth();
  return (
    <Box >
      <Box p={5} backgroundColor={"#EBE3D5"}>
        <SpecificNavbar />
        <WholeSalerBanner/>
      </Box>
      <ProductBody />
    </Box>
  )
}

export default Products