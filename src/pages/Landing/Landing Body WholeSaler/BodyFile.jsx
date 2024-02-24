import { Box, Button} from '@chakra-ui/react'
import { getDownloadURL, getStorage, ref as imageRef, listAll, uploadBytes } from 'firebase/storage';
import React, { useEffect, useRef, useState } from 'react'
import Gallery from './Gallery'
import OnScreenCard from './OnScreenCard'
import CustomerReview from './CustomerReview'
import app from '../../../FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../components/AuthContext/AuthContext';
import SpecificNavbar from '../../../components/wholesaler/SpecificNavbar/specificNavbar';
import WholeSaler from '../WholeSaler';
import WholeSalerBanner from '../WholeSalerBanner';

const BodyFile = () => {
  const navigate=useNavigate();
  const storage = getStorage(app);
  const handleAddImage=()=>{
    navigate("/wholesaler/home/addimage")
  }

  const imageList = [];
  const fetchImages = async () => {
    const localEmail=localStorage.getItem('email');
    // console.log(localEmail+" from fetch List");
    const storageRef = imageRef(storage, `${localEmail}/shopImg/`);

    const listResult = await listAll(storageRef);

    for (const item of listResult.items) {
      const url = await getDownloadURL(item);
      imageList.push(url);
    }
  };
  const [profilePic,setprofilePic]=useState();
  const fetchProfilePic = async () => {
    const localEmail=localStorage.getItem('email');
    // console.log(localEmail+" from fetch List");
    const storageRef = imageRef(storage, `${localEmail}/profilePic/`);

    const listResult = await listAll(storageRef);

    for (const item of listResult.items) {
      const url = await getDownloadURL(item);
      setprofilePic(url);
      console.log(profilePic)
    }
  };
  
  useEffect(() => {
    // setLoading(false);
    fetchImages();
    fetchProfilePic();
  },[fetchImages]);

  return (
    <Box>
      <SpecificNavbar profilePic={profilePic}/>
      <WholeSalerBanner/>
    <Box backgroundColor={"#F3EEEA"} borderRadius={"30px"} h={"100%"} p={10} display={"flex"} flexDir={"column"}>
      {/* <Button>Add Image</Button> */}
      <Box>
      <Button  width={"100px"} onClick={handleAddImage}  fontFamily={"Karantina"} fontSize={25} backgroundColor={"#B0A695"} ml={"90%"}>
            Add Image
          </Button>
      </Box>

        <Gallery imageList={imageList}/>
      <Button width={"100px"} mt={"100px"} fontFamily={"Karantina"} fontSize={25} backgroundColor={"#B0A695"} ml={"90%"}>Edit Info</Button>
      <OnScreenCard profilePic={profilePic}/>
      <Box mt={10} mb={10} fontSize={80}  fontFamily={"Karantina"}>Hear From Our Customers
      <Box
        width={"100%"}
        height={"3px"}
        borderRadius={"20px"}
        backgroundColor={"black"}
        mt={-4}
        ></Box>
        </Box>
      <CustomerReview/>
    </Box>
        </Box>
  )
}

export default BodyFile