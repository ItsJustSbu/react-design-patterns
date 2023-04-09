import { useState, useEffect } from "react";


function ControlledForm(){

    //captures the input (2 way binding)
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [hairColor, setHairColor] = useState('');

    //main benefit -> controlled forms allows us to do form validation whilst they are typing
    useEffect(()=>{
        if(name.length < 2){
            console.log('name must be 2 or more charecters');
        }
    },[name]);

    return(
        <form>
            <input name="name"
             type="text"
              placeholder="name"
               value={name}
                onChange={e => setName(e.target.value)}/>

            <input name="age"
             type="number"
              placeholder="age"
               value={age}
                onChange={e => setAge(Number(e.target.value))}/>

            <input name="hairColor"
             type="text"
              placeholder="hair color"
               value={hairColor}
                onChange={e => setHairColor(e.target.value)}/>

            <button>Submit</button>
        </form>
    )


}

export default ControlledForm;