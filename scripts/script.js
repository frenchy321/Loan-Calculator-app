// LISTEN FOR SUBMIT
document
  .querySelector("#loan-form")
  .addEventListener("submit", calculateResults);

//   CALCULATE RESULTS
function calculateResults(e) {
  console.log("calculating...");

  // UI VARIABLES
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;
}
