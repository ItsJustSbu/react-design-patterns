import React from "react";

function UncontrolledForm(){

    //React.CreateRef takes in input
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput = React.createRef();

    const handleSubmit = e =>{

        console.log(nameInput.current.value);
        e.preventDefault();

    }
    return(
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="name" ref={nameInput}/>
            <input name="age" type="number" placeholder="age" ref={ageInput} />
            <input name="hairColor" type="text" placeholder="hair color" ref={hairColorInput} />
            <input type="submit" value="submit" />

        </form>
    )
}

export default UncontrolledForm;