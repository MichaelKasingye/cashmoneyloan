<a href="https://www.npmjs.com/package/cashmoneyloan"><img src="https://i.pinimg.com/564x/cc/8a/ab/cc8aabb120ae1cc3febe59167e06b7ed.jpg" height="200px" alt="Image"/></a>
### Cashmoneyloan
Cashmoneyloan is a tool for performing calculations on loans in JavaScript.

#### Features
1. Calculate monthly payment figures

#### Usage
<br>

With npm:
`npm install cashmoneyloan`
<br>

#### Calculate monthly payment figures
This displays figures meant to be montly payments. 
<br>

##### leveraging destructuring  <br>

##### Examples: (Node js)
```javascript
const { loanMonthlyPayment, totalInterest, netIncomeBalance, loanPaymentToIncome } = require('cashmoneyloan'); // ./index.js

loanMonthlyPayment(loanAmount, monthlyLoanPeriod, interestRate)

loanPaymentToIncome(loanInstalments, income);
 
totalInterest(loanMonthlyPayment, monthlyLoanPeriod, loanAmount);
 
netIncomeBalance(income, loanInstalments);
 
console.log(loanMonthlyPayment(1000000,10,10)); //104640
```

##### Examples: (React js)
```javascript
import {loanMonthlyPayment, loanPaymentToIncome, netIncomeBalance} from 'cashmoneyloan';

export default function App() {
  const income = 5000;
  const loanAmount = 100000;
  const monthlyLoanPeriod = 60;
  const interestRate = 10;

  
  const monthlyLoanInstalment = loanMonthlyPayment(loanAmount,monthlyLoanPeriod,interestRate);
  const paymentToIncomeRatio = loanPaymentToIncome(monthlyLoanInstalment, income);
  const IncomeBalance = netIncomeBalance(income, monthlyLoanInstalment);

  return (
    <div className="container">
      <h1>LOAN CALCULATOR</h1>
      
      <p>Customer: James Opio</p>
      
      <p>Income: ${income}</p>
      
      <p>Mortgage : ${loanAmount}</p>
      
      <p>Duration: {monthlyLoanPeriod} months</p>
      
      <p>Rate: {interestRate}%</p>
      
      <p>Loan Instalment: ${monthlyLoanInstalment}</p>
      
      <p>Percetage of loan instalment <br/>
       to income : ${paymentToIncomeRatio}</p>
       
      <p>Income Balance after loan instalment : ${IncomeBalance}</p>
    </div>
  );
}
```
