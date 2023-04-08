function SmallPersonListItem({person}){
    const  {name, age} = person;
    return(
        <p>Name: {name}, age: {age}</p>
    );
}

export default SmallPersonListItem;