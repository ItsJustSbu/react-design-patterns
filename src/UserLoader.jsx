//takes care of loading user data
import React, { useState,useEffect } from "react";
import axios from "axios";


function UserLoader({userId,children}){
    const [user,setUser] = useState(null);

    //should do research on useEffect and making API requests from API endpoints.
    useEffect(()=>{
        (async()=>{
            const response = await axios.get(`/users/${userId}`);
            const currentUser = response.data;
            setUser(currentUser);
        })();
    },[userId]);

    return(
        <>
        
        {React.Children.map(children, child=>{
            if(React.isValidElement(child)){
               return React.cloneElement(child,{user});
            }

            return child;
        })}
        </>
    );

}

export default UserLoader;