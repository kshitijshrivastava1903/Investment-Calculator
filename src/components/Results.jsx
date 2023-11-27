import {calculateInvestmentResults,formatter} from '../util/investment.js'
export default function Results({userInputObj:userInput}){

    const resultsData = calculateInvestmentResults(userInput);
    
    console.log(resultsData);

    return (
   <table id="result">
<thead>
    <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th> Invested Capital</th>
    </tr>
</thead>
<tbody> 
{resultsData.map((result,index)=>{
    return (
        <tr key={index}>
            <td>{result.year}</td>
            <td>{result.annualInvestment}</td>
            <td>{result.interest}</td>
            <td>{result.valueEndOfYear - (result.annualInvestment*result.year+userInput.initialInvestment)}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
        </tr>
    )
}
)
}

</tbody>



   </table>
    );
}