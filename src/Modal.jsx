import { useState } from "react";
import styled from "styled-components";

//A modal is a pop-up screen

//Modal background covers the rest of the page
const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
`;

//Modal body contains the contents that are within the model
const ModalBody = styled.div`
    background-color: white;
	margin: 10% auto;
	padding: 20px;
	width: 50%;
`;

function Modal({children}){
    const [shouldShow, setShouldShow] = useState(false);
    return(
        <>
        <button onClick={()=>setShouldShow(true)}>Show Modal</button>
        {shouldShow && <ModalBackground >
            <ModalBody onClick={e => e.stopPropagation()}>
                <button onClick={()=>setShouldShow(false)}>Hide Modal</button>
                {children}
            </ModalBody>

        </ModalBackground>}
        </>
    )
}

export default Modal;