// LISTEN FOR SUBMIT
document.querySelector("#loan-form").addEventListener("submit", function(e) {
  // HIDE RESULTS
  document.getElementById("results").style.display = "none";
  // SHOW LOADER
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

//   CALCULATE RESULTS
function calculateResults() {
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

  // COMPUTE MONTHLY PAYMENTS
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);

  const monthly = (principal * x * calculatedInterest) / (x - 1);
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    // SHOW RESULTS
    document.getElementById("results").style.display = "block";

    // HIDE LOADER
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please Check Your Numbers");
  }
}

// SHOW ERROR
function showError(error) {
  // HIDE RESULTS
  document.getElementById("results").style.display = "none";
  // SHOW LOADER
  document.getElementById("loading").style.display = "none";

  // CREATE DIV
  const errorDiv = document.createElement("div");

  // GET ELEMENTS
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // ADD CLASS
  errorDiv.className = "alert alert-danger";

  // CREATE TEXT NODE AND APPEND TO ERRORDIV
  errorDiv.appendChild(document.createTextNode(error));

  // INSERT ERROR ABOVE HEADING
  card.insertBefore(errorDiv, heading);

  //  CLEAR ERROR
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
