import { useState, useEffect } from "react"
import axios from "axios"


export const useDataSource = getDataFunc => {
    const [resource,setResource] = useState(null);

    useEffect(()=>{
        (async ()=>{
            const result = await getDataFunc();
            setResource(result);
        })();

    },[getDataFunc]);

    return resource;
}