import { Box, Image, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, Button, useToast } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'; // Import hamburger menu icon
import React, { useState } from 'react'
import cart from "../../../assets/cart img.png"
// import profilePic from  "../../../assets/Profile Pic.png"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext/AuthContext';

const SpecificNavbar = ({profilePic}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toast=useToast();
  const navigate=useNavigate()
  const authContext=useAuth();
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  }
  const handleLogout=()=>{
    toast({
      title: 'Logging out',
      description: "We've created your account for you.",
      status: 'info',
      duration: 9000,
      isClosable: true,
    })
    localStorage.removeItem('email');
    authContext.setIsAuthenticated(false);
    authContext.setEmail(null);
    navigate("/getstarted")
  }

  return (
    <Box p="5" display={"flex"} justifyContent={"space-between"}>
      {/* Hamburger Menu Button */}
      <IconButton 
        icon={<FiMenu />} 
        display={{ base: 'flex', md: 'none' }} // Show only on small screens
        onClick={toggleDrawer} 
        aria-label="Open Menu"
        mr={2} // Margin for spacing
        color={"black"}
      />

      {/* Navbar Links */}
      <Box display={{ base: 'none', md: 'flex' }} fontSize={"20px"}>
        <Box mr={10}>My Shop</Box>
        <Box mr={10}>My Products</Box>
        <Box mr={10}>Retailers</Box>
      </Box>

      {/* Cart and Profile Images */}
      <Box display={"flex"}>
        <Button onClick={handleLogout}>Logout</Button>
        <Image src={cart} />
        <Image src={profilePic} width={"50px"} borderRadius={"50%"} />
      </Box>

      {/* Responsive Drawer */}
      <Drawer placement="left" onClose={toggleDrawer} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Box fontSize={"20px"} mt={5}>
              <Box mb={5}>My Shop</Box>
              <Box mb={5}>My Products</Box>
              <Box mb={5}>Retailers</Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default SpecificNavbar
