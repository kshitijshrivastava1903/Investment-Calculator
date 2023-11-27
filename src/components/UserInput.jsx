import {useState} from 'react';

export default function UserInput() {

const[userInput,setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
});

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

  return (
<section id="user-input">
    <div className="input-group">
        <p>
            <label>
                Initial Investment
            </label>
            <input type="number" required = {true} value = {userInput.initialInvestment} onChange={(event)=>handleChange('initialInvestment',event.target.value)} />
        </p>
        <p>
            <label>
                Annual Investment
            </label>
            <input type="number" required = {true} value = {userInput.annualInvestment} onChange={(event)=>handleChange('annualInvestment',event.target.value)} />
        </p>
</div>

<div className="input-group">
        <p>
            <label>
                Expected Return
            </label>
            <input type="number" required = {true} value = {userInput.expectedReturn} onChange={(event)=>handleChange('expectedReturn',event.target.value)}/>
        </p>
        <p>
            <label>
                Duration
            </label>
            <input type="number" required = {true} value = {userInput.duration} onChange={(event)=>handleChange('duration',event.target.value)}/>
        </p>
</div>
</section>
);
}

