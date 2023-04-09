//takes care of loading user data
import React, { useState,useEffect } from "react";
import axios from "axios";


function ResourceLoader({ResourceUrl,ResourceName,children}){
    const [state,setState] = useState(null);

    //should do research on useEffect and making API requests from API endpoints.
    useEffect(()=>{
        (async()=>{
            const response = await axios.get(ResourceUrl);
            setState(response.data);
        })();
    },[ResourceUrl]);

    return(
        <>
        
        {React.Children.map(children, child=>{
            if(React.isValidElement(child)){
               return React.cloneElement(child,{[ResourceName]:state});
            }

            return child;
        })}
        </>
    );

}

export default ResourceLoader;