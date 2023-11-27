import {useState} from 'react';

export default function UserInput({onInputChange,userInputObj:userInput}) {





  return (
<section id="user-input">
    <div className="input-group">
        <p>
            <label>
                Initial Investment
            </label>
            <input type="number" required = {true} value = {userInput.initialInvestment} onChange={(event)=>onInputChange('initialInvestment',event.target.valueAsNumber)} />
        </p>
        <p>
            <label>
                Annual Investment
            </label>
            <input type="number" required = {true} value = {userInput.annualInvestment} onChange={(event)=>onInputChange('annualInvestment',event.target.valueAsNumber)} />
        </p>
</div>

<div className="input-group">
        <p>
            <label>
                Expected Return
            </label>
            <input type="number" required = {true} value = {userInput.expectedReturn} onChange={(event)=>onInputChange('expectedReturn',event.target.valueAsNumber)}/>
        </p>
        <p>
            <label>
                Duration
            </label>
            <input type="number" required = {true} value = {userInput.duration} onChange={(event)=>onInputChange('duration',event.target.valueAsNumber)}/>
        </p>
</div>
</section>
);
}

