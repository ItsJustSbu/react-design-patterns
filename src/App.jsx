import ControlledOnboardingFlow from './ControlledOnboardingFlow';
import { useState } from 'react';

const StepOne = ({goToNext}) => (
<>
<h1>Step 1</h1>
<button onClick={()=>goToNext({name:'Sibusiso'})}>Next</button>
</>
)
const StepTwo = ({goToNext}) => (
	<>
	<h1>Step 2</h1>
	<button onClick={()=>goToNext({age:22})}>Next</button>
	</>
	)
const StepThree = ({goToNext}) => (
	<>
	<h1>Step 3</h1>
	<button onClick={()=>goToNext({hairColor:'Black'})}>Next</button>
	</>
	)
const StepFour = ({goToNext}) => (
	<>
	<h1>Step 4</h1>
	<button onClick={()=>goToNext({hobby:'coding'})}>Next</button>
	</>
	)

function App() {

	const [onboardingData, setOnboardingData] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToNext = stepData =>{
        setOnboardingData({...onboardingData, stepData});
		setCurrentIndex(currentIndex+1);
	}

	return (
		
		<>

		<ControlledOnboardingFlow currentIndex={currentIndex} 
		onNext={goToNext}
		>
			<StepOne />
			<StepTwo />
			<StepThree />
			<StepFour />
		</ControlledOnboardingFlow>

		</>
	);
}

export default App;
