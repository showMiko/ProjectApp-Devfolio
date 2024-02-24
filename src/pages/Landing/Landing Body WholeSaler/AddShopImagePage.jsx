import React, { useRef, useState } from "react";
import {
  Box,
  Input,
  Button,
  Divider,
} from "@chakra-ui/react";
import { getStorage, ref as imageRef,uploadBytes } from 'firebase/storage';
import { useAuth } from '../../../components/AuthContext/AuthContext';
import app from '../../../FirebaseConfig';
import { useNavigate } from "react-router-dom";
const AddShopImagePage = () => {

      const [images,setImages]=useState(null);
      const authContext=useAuth();
      const storage = getStorage(app);
      const finalRef = useRef(null)
      const navigate=useNavigate()
      const handleUploadImage = (e) => {
      if (e.target.files[0]) {
            setImages(e.target.files[0]);
      }
      };
      const handleCancel = () => {
            navigate('/wholesaler/home');
      }

      const uploadImage=async ()=>{
            
            const storageRef = imageRef(storage,`${authContext.email}/shopImg/${images.name}`);
            await uploadBytes(storageRef, images).then(() => {
            // console.log('Image uploaded successfully!');
            navigate('/wholesaler/home');
            // fetchImages();
            
            }).catch(error => {
            console.error('Error uploading image: ', error);
            });
      }

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
    >
      <Box
        fontSize={20}
        backgroundColor={"transparent"}
        p={10}
        boxShadow={"10px 10px 10px 10px"}
        display={"flex"}
        flexDir={"column"}
      >
        <Box fontSize={40} fontFamily={"karantina"}>
          Add Image
        </Box>
        <Divider mb={10} />
        <Input type='file' onChange={handleUploadImage}/>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Button colorScheme="red" onClick={handleCancel}>Cancel</Button>
            <Button colorScheme="blue" onClick={uploadImage}>Submit</Button>
            
        </Box>
      </Box>
    </Box>
  );
};

export default AddShopImagePage;
