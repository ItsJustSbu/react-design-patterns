import SplitScreen from './SplitScreen'

function LeftHandComponent(){
  return <h1>Left!</h1>;
}
function RightHandComponent(){
  return <p>Right</p>;
}

function App() {
  return (
    <SplitScreen 
      LeftWeight={1}
      RightWeight={3}
    >
      <LeftHandComponent />
      <RightHandComponent />
    </SplitScreen>
  );
}

export default App;
