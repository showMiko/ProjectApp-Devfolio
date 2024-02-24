import React, { useState } from 'react'
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import app from '../../FirebaseConfig';
const Welcome = () => {
      const [image, setImage] = useState(null);

      const handleImageChange = (e) => {
        if (e.target.files[0]) {
          setImage(e.target.files[0]);
        }
      };
    
      const handleUpload = () => {
        const storage = getStorage(app);
        const storageRef = ref(storage, `images/${image.name}`);
        
        uploadBytes(storageRef, image).then(() => {
          // console.log('Image uploaded successfully!');
        }).catch(error => {
          console.error('Error uploading image: ', error);
        });
      };
    
      return (
        <div>
          <input type="file" onChange={handleImageChange} />
          <button onClick={handleUpload}>Upload Image</button>
        </div>
      );
};


export default Welcome