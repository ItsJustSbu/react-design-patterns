import { ControlledModal } from "./ControlledModal";
import { useState } from "react";
function App() {

	const [shouldShowModal, setShouldShowModal] = useState(false);

	return (
		
		<>

			<ControlledModal shouldShow={shouldShowModal} onRequestClose={()=>setShouldShowModal(false)}>
				<h1>Hello</h1>
			</ControlledModal>
			<button onClick={()=> setShouldShowModal(!shouldShowModal)}>
				{shouldShowModal?'hide Modal':'show Modal'}
			</button>
		</>
	);
}

export default App;
