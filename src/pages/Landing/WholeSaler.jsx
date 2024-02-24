import React from 'react'
import SpecificNavbar from '../../components/wholesaler/SpecificNavbar/specificNavbar'
import { Box } from '@chakra-ui/react'
import WholeSalerBanner from './WholeSalerBanner'
import BodyFile from './Landing Body WholeSaler/BodyFile'

const WholeSaler = () => {

  return (
    <Box >
      <Box p={10} backgroundColor={"#EBE3D5"}>
        <BodyFile/>
      </Box>
    </Box>
  )
}

export default WholeSaler