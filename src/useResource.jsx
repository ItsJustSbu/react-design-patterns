import { useState, useEffect } from "react"
import axios from "axios"


export const useResource = Resourceurl =>{
    const [resource,setResource] = useState(null);

    useEffect(()=>{
        (async ()=>{
            const response = await axios.get(Resourceurl);
            setResource(response.data);
        })();

    },[Resourceurl]);

    return resource;
}