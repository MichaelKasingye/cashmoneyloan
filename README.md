<a href="https://www.npmjs.com/package/cashmoneyloan"><img src="https://i.pinimg.com/564x/cc/8a/ab/cc8aabb120ae1cc3febe59167e06b7ed.jpg" height="200px" alt="Image"/></a>
### Cashmoneyloan
Cashmoneyloan is a tool for performing calculations on loans in JavaScript.

#### Features
1. Calculate monthly payment figures

#### Usage
<br>
With npm:
<code>
npm install cashmoneyloan
</code>
<br>
Or, with yarn:
<code>
npm install cashmoneyloan
</code>
<br>

#### Calculate monthly payment figures
This displays figures meant to be mountly payments. 
<br>
<code>
 // Function 
<code>
 <br>
loanMonthlyPayment(loanAmount, monthlyLoanPeriod, interestRate)
</code>
<br>
##### leveraging destructuring 
 <br>
<code>
const { loanMonthlyPayment } = require('cashmoneyloan'); // ./index.js
</code>
 <br>
<code>
 console.log(loanMonthlyPayment(1000000,10,10));
</code>
