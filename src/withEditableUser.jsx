import React,{useState, useEffect} from "react";
import axios from "axios";

function withEditableUser(Component, userId){
    return props =>{
        const [originalUser, setOriginalUser] = useState(null);
        const [user, setUser] = useState(null);


        useEffect(()=>{
            (async ()=>{
                const response = await axios.get(`/users/${userId}`);
                setOriginalUser(response.data);
                setUser(response.data);
            })();
        },[]);

        const OnChangeUser = changes =>{
            setUser({...user, ...changes});
        }

        const OnSaveUser = async () =>{
            const response = await axios.post(`/users/${userId}`, {user});
            setOriginalUser(response.data);
            setUser(response.data);
        }

        const OnResetUser = () =>{
            setUser(originalUser);
        }

        return <Component {...props}
        user={user}
        OnChangeUser={OnChangeUser}
        OnSaveUser={OnSaveUser}
        OnResetUs={OnResetUser} />
    }
}

export default withEditableUser;