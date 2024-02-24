import React, { useState } from 'react';
import { Box, Button, Input, Select, useToast } from '@chakra-ui/react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';
const Login = () => {
  const toast=useToast();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [category, setCategory] = useState('');
      const navigate=useNavigate();
      const authContext=useAuth();
      const handleInputChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
          case 'email':
            setEmail(value);
            break;
          case 'password':
            setPassword(value);
            break;
          case 'category':
            setCategory(value);
            break;
          default:
            break;
        }
      };
    
      const handleSubmit = async(event) => {
        event.preventDefault();
        const auth=getAuth();
        const newPassword=password+category
        try{

        await signInWithEmailAndPassword(auth, email, newPassword)
        .then(()=>{
          toast({
            title: 'Logged in....',
            description: "",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          localStorage.setItem('email', email);
          // console.log('User logged in successfully as '+category);
          authContext.setEmail(email);
          authContext.setIsAuthenticated(true)
          // authContext.findUserDetails();
          // setTimeout(()=>{
            
            navigate(`/${category}/home`); 
          // },4000)
        // console.log(authContext.email)
        })
        
      }
      catch (error) {
        toast({
          title: 'Couldnt login',
          description: "",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        console.error('Error logging in:', error.message);
      }
    };
    
      return (
        <Box className="background-image">
          <Box fontFamily="Karantina" color="#D7BD61">
            <Box
              ml="75%"
              mt="25vh"
              fontSize={50}
              style={{
                textShadow:
                  '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
              }}
            >
              Login
            </Box>
    
            <form onSubmit={handleSubmit}>
              <Box
                fontSize={25}
                ml="65%"
                style={{
                  textShadow:
                    '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
                }}
              >
                <Box width="80%">
                  <Box mb={-2}>Email</Box>
                  <Input
                    mb={3}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    color="black"
                    fontSize={20}
                    variant="flushed"
                  />
                </Box>
                <Box width="80%">
                  <Box mb={-2}>Password</Box>
                  <Input
                    mb={3}
                    type='password'
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    color="black"
                    fontSize={20}
                    variant="flushed"
                  />
                </Box>
                
                <Box width="80%">
                  You Are A ?
                  <Select
                    backgroundColor="#D7BD61"
                    overflow="hidden"
                    color="black"
                    name="category"
                    value={category}
                    onChange={handleInputChange}
                    placeholder="Select"
                    required
                  >
                    <option value="retailer">Retailer</option>
                    <option value="wholesaler">Wholesaler</option>
                  </Select>
                </Box>
                <Button
                  backgroundColor="#D7BD61"
                  mt={5}
                  ml="20%"
                  width="50%"
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      )
}

export default Login
