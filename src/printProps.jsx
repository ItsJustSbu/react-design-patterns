
function printProps({Component}){
    return (props) =>{
        console.log(props);
        <Component {...props} />
    }
}

export default printProps;