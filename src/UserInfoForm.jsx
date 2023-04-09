import withEditableUser from "./withEditableUser";

export const UserInfoForm = withEditableUser(({user, OnChangeUser, OnSaveUser, OnResetUser}) =>{
    const {name, age, hairColor} = user || {};

    return user?(
        <>
            <label>Name :
            <input value={name} onChange={e => OnChangeUser({name: e.target.value})} />
            </label>

            <label>Age :
            <input type="number" value={age} onChange={e => OnChangeUser({age: Number(e.target.value)})} />
            </label>
            <label>Hair Color :
            <input value={hairColor} onChange={e => OnChangeUser({hairColor: e.target.value})} />
            </label>
            
            <button onClick={OnResetUser}>Reset</button>
            <button onClick={OnSaveUser}>Save changes</button>

        
        </>
    ) : <p>Loading...</p>;

    },'123');