//takes care of loading user data
import React, { useState,useEffect } from "react";


function DataSource({getDataFunction=()=>{},ResourceName,children}){
    const [state,setState] = useState(null);

    //should do research on useEffect and making API requests from API endpoints.
    useEffect(()=>{
        (async()=>{
            const data = await getDataFunction();
            setState(data);
        })();
    },[getDataFunction]);

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

export default DataSource;