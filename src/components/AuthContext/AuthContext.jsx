import React, { createContext, useContext, useEffect, useState } from 'react'
import { getDatabase, ref, get } from "firebase/database";
export const AuthContext=createContext();

export default function AuthProvider  ({children}) {
      const[username,setUsername]=useState('abcd')
      const[password,setPassword]=useState(null)
      const[email,setEmail]=useState(null);
      const[isAuthenticated,setIsAuthenticated]=useState(false);
      const [userDetails,setUserDetails]=useState(null);

      useEffect(() => {
            const storedEmail = localStorage.getItem('email');
            if (storedEmail) {
                setEmail(storedEmail);
            }
        }, []);

        const findUserDetails=async()=>{
          
          const db = getDatabase();
          const dbRef = ref(db, "users");
      
          await get(dbRef).then((snapshot) => {
              if (snapshot.exists()) {
                  const usersData = snapshot.val();
                //   console.log(usersData)
                  const matchingUsers = Object.values(usersData).filter(user => user.email === email);
      
                  if (matchingUsers.length > 0) {
                      setUserDetails(matchingUsers[0]); // Assuming there is only one user with the matching email
                      // console.log(userDetails+" is the retrieved Data")
                } else {
                      console.log("No user found with the provided email");
                  }
              } else {
                  console.log("No user data available in the database");
              }
          }).catch((error) => {
              console.error(error);
          });
        }

      const values={userDetails,findUserDetails,email,setEmail,username,setUsername,password,setPassword,isAuthenticated,setIsAuthenticated};

  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  )
}
export const useAuth=()=>useContext(AuthContext);