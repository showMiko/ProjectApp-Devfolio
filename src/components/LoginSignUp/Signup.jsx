import React, { useState } from 'react';
import { Box, Button, Input, Select, useToast } from '@chakra-ui/react';
// import { getFirestore,collection,addDoc } from 'firebase/firestore';
import { getStorage, ref as imageRef, uploadBytes } from 'firebase/storage';
import { getDatabase, ref, push } from 'firebase/database';
import app from "../../FirebaseConfig"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password,  setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [license, setLicense] = useState('');
  const [gst, setGst] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [category, setCategory] = useState('');
  const [shopname,setShopname] = useState('');
  const [tradeImg, setTradeImg] = useState(null);
  const [gstBillImg, setGstBillImg] = useState(null);
  const [aadharImg, setAadharImg] = useState(null);
  const [profilePic,setProfilePic]=useState(null);
  const toast = useToast()

  const handleTradeLicenseImageChange = (e) => {
    if (e.target.files[0]) {
      setTradeImg(e.target.files[0]);
    }
  };
  const handleGstBillImageChange = (e) => {
    if (e.target.files[0]) {
      setGstBillImg(e.target.files[0]);
    }
  };
  const handleAadharImageChange = (e) => {
    if (e.target.files[0]) {
      setAadharImg(e.target.files[0]);
    }
  };
  const handleProfileImageChange=(e)=>{
    if(e.target.files[0])
    {
      setProfilePic(e.target.files[0])
    }
  }

  const navigate=useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the state based on the input field's name
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'license':
        setLicense(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'gst':
        setGst(value);
        break;
      case 'shopname':
        setShopname(value);
        break;
      case 'aadhar':
        setAadhar(value);
        break;
      case 'category':
        setCategory(value);
        break;
      default:
        break;
    }
  };
  const storage = getStorage(app);
  const licenseUpload =(image)=>{
    const storageRef = imageRef(storage, `${email}/${category}/${image.name}`);
    uploadBytes(storageRef, image).then(() => {
      // console.log('Image uploaded successfully!');
    }).catch(error => {
      console.error('Error uploading image: ', error);
    });
  }
  const profilePicUpload =(image)=>{
    const storageRef = imageRef(storage, `${email}/profilePic/${image.name}`);
    uploadBytes(storageRef, image).then(() => {
      // console.log('Image uploaded successfully!');
    }).catch(error => {
      console.error('Error uploading image: ', error);
    });
  }
  const handleSubmit =async (event) => {
    event.preventDefault();
    const db = getDatabase(app);
    const usersRef = ref(db, 'users');
    const auth=getAuth(app);
    const newPassword=password+category;
    const userCredential = await createUserWithEmailAndPassword(auth, email, newPassword);
    const user = userCredential.user;
    // console.log("user Created", user);
    licenseUpload(tradeImg)
    licenseUpload(gstBillImg)
    licenseUpload(aadharImg)
    profilePicUpload(profilePic)
    

    await push(usersRef, {
      username,
      phone,
      email,
      newPassword,
      address,
      shopname,
      license,
      gst,
      aadhar,
      category,
    }).then(() => {
      // console.log('Data saved successfully');
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      navigate("/login");
    }).catch((error) => {
      console.error('Error saving data: ', error);
    });
  };

  return (
    <Box className="background-image" maxH={"100vh"} overflow={"scroll"}>
      <Box fontFamily="Karantina" color="#D7BD61">
        <Box
          ml="75%"
          fontSize={50}
          style={{
            textShadow:
              '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
          }}
        >
          Signup
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
            <Box borderRadius={"50%"}>
              Upload Profile Pic
              <br/>
              <Input 
                type='file' 
                width={"80%"} 
                name='profilePic'
                onChange={handleProfileImageChange} 
              />
            </Box>
            <Box width="80%">
              <Box mb={-2}>Name</Box>
              <Input
                mb={3}
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
                color="black"
                fontSize={20}
                variant="flushed"
              />
            </Box>
            <Box width="80%">
              <Box mb={-2}>Contact Number</Box>
              <Input
                mb={3}
                type="text"
                name="phone"
                value={phone}
                onChange={handleInputChange}
                color="black"
                fontSize={20}
                variant="flushed"
              />
            </Box>
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
              <Box mb={-2}>Address</Box>
              <Input
                mb={3}
                type="text"
                name="address"
                value={address}
                onChange={handleInputChange}
                color="black"
                fontSize={20}
                variant="flushed"
              />
            </Box>
            <Box width="80%">
              <Box mb={-2}>Shop Name</Box>
              <Input
                mb={3}
                type="text"
                name="shopname"
                value={shopname}
                onChange={handleInputChange}
                color="black"
                fontSize={20}
                variant="flushed"
              />
            </Box>
            <Box width="80%">
              <Box mb={-2}>Trade License No:</Box>
              <Input
                mb={3}
                type="text"
                name="license"
                value={license}
                onChange={handleInputChange}
                color="black"
                fontSize={20}
                variant="flushed"
              />
            </Box>
            <Box width="80%">
              <Box mb={-2}>GST No:</Box>
              <Input
                mb={3}
                type="text"
                name="gst"
                value={gst}
                onChange={handleInputChange}
                color="black"
                fontSize={20}
                variant="flushed"
              />
            </Box>
            <Box width="80%">
              <Box mb={-2}>Aadhar No:</Box>
              <Input
                mb={3}
                type="text"
                name="aadhar"
                value={aadhar}
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
            <Box width="100%" display="flex" flexDir="column" mt={3}>
              Upload Documents
              <Box display={"flex"} width={"80%"}>
                {/* <Input type="file" backgroundColor="#D7BD61" m={2} onChange={handleTradeLicenseImageChange} placeholder='Trade License'/> */}
                <Input type="file" backgroundColor="#D7BD61" m={2} onChange={handleTradeLicenseImageChange} placeholder='Trade License'/>
                <Input type="file" backgroundColor="#D7BD61" m={2} onChange={handleGstBillImageChange} placeholder='GST Bill'/>
                <Input type="file" backgroundColor="#D7BD61" m={2} onChange={handleAadharImageChange} placeholder='Aadhar'/>
{/* 
                <Button backgroundColor="#D7BD61" m={2}>
                  GST Bill
                </Button>
                <Button backgroundColor="#D7BD61" m={2}>
                  Aadhar Card
                </Button> */}
              </Box>
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
  );
};

export default Signup;


