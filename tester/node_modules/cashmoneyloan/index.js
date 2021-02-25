module.exports = {
  loanMonthlyPayment: (loanAmount, monthlyLoanPeriod, interestRate) => {
    const annualLoanPeriod = monthlyLoanPeriod / 12;
    const percentageRate = interestRate / 100;
    const monthlyInterestRate = percentageRate / 12;
    const accumulativeLoanPeriods = 12 * annualLoanPeriod;

    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -accumulativeLoanPeriods));
    return monthlyPayment.toFixed();
  },
  totalInterest: (loanMonthlyPayment, monthlyLoanPeriod, loanAmount) => {
    const total = loanMonthlyPayment * monthlyLoanPeriod - loanAmount;
    return total;
  },
  netIncomeBalance: (income, loanInstalments) => {
    const difference = income - loanInstalments;
    return difference;
  },
  loanPaymentToIncome: (loanInstalments, income) => {
    const ratio = (loanInstalments / income) * 100;
    return ratio;
  },
  comma: (inputNumber) => {
    let formetedNumber = Number(inputNumber)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    let splitArray = formetedNumber.split(".");
    if (splitArray.length > 1) {
      formetedNumber = splitArray[0];
    }
    return formetedNumber;
  },
};
