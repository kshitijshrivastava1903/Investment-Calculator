import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from './components/Results';
import {useState} from 'react';
function App() {

  const[userInput,setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
});

const inputIsValid = userInput.duration<0?false:true; 

function handleChange(typeOfInput,newValue){
  setUserInput(prevUserInput =>
      {
          return {
          ...prevUserInput,
          [typeOfInput]: newValue
          };
      }
  );
}


  return (<>
  {<Header></Header>}
  <UserInput onInputChange={handleChange} userInputObj={userInput}></UserInput>
  {inputIsValid?<Results userInputObj={userInput}></Results>:<p className="center">Invalid Input</p>}
    </>
    
  )
}

export default App;
