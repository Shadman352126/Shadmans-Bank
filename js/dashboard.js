function depositCalculation() {
  const depositAmountField = document.getElementById("deposit-input");
  const newDepositAmountString = depositAmountField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  depositAmountField.value = "";
  if (isNaN(newDepositAmount)) {
    alert("Please provide a valid number");
    return;
  }

  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  const currentTotalDeposit = previousDepositTotal + newDepositAmount;

  depositTotalElement.innerText = currentTotalDeposit;

  // deposit balance add to total balance
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  const currentTotalBalance = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentTotalBalance;
}

function withdrawCalculation() {
  const withdrawAmountField = document.getElementById("withdraw-input");
  const newWithdrawAmountString = withdrawAmountField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  withdrawAmountField.value = "";
  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid number");
    return;
  }

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  const currentTotalWithdraw = previousWithdrawTotal + newWithdrawAmount;

  // Withdraw balance substract from total balance
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // validation for withdrawing more then total balance
  if (newWithdrawAmount > previousBalanceTotal) {
    alert("tui fokir");
    return;
  }

  withdrawTotalElement.innerText = currentTotalWithdraw;

  const currentTotalBalance = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentTotalBalance;
}

// deposit amount box
// document.getElementById("btn-deposit").addEventListener("click", function () {
//   const depositAmountField = document.getElementById("deposit-input");
//   const newDepositAmountString = depositAmountField.value;
//   const newDepositAmount = parseFloat(newDepositAmountString);

//   const depositTotalElement = document.getElementById("deposit-total");
//   const previousDepositTotalString = depositTotalElement.innerText;
//   const previousDepositTotal = parseFloat(previousDepositTotalString);
//   const currentTotalDeposit = previousDepositTotal + newDepositAmount;

//   depositTotalElement.innerText = currentTotalDeposit;
//   depositAmountField.value = "";
//   // deposit balance add to total balance
//   const balanceTotalElement = document.getElementById("balance-total");
//   const previousBalanceTotalString = balanceTotalElement.innerText;
//   const previousBalanceTotal = parseFloat(previousBalanceTotalString);
//   const currentTotalBalance = previousBalanceTotal + newDepositAmount;
//   balanceTotalElement.innerText = currentTotalBalance;
// });

// withdraw amount box
// document.getElementById("btn-withdraw").addEventListener("click", function () {
//   const withdrawAmountField = document.getElementById("withdraw-input");
//   const newWithdrawAmountString = withdrawAmountField.value;
//   const newWithdrawAmount = parseFloat(newWithdrawAmountString);

//   const withdrawTotalElement = document.getElementById("withdraw-total");
//   const previousWithdrawTotalString = withdrawTotalElement.innerText;
//   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
//   const currentTotalWithdraw = previousWithdrawTotal + newWithdrawAmount;

//   // Withdraw balance substract from total balance
//   const balanceTotalElement = document.getElementById("balance-total");
//   const previousBalanceTotalString = balanceTotalElement.innerText;
//   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//   withdrawAmountField.value = "";

//   if (newWithdrawAmount > previousBalanceTotal) {
//     alert("tui fokir");
//     return;
//   }

//   withdrawTotalElement.innerText = currentTotalWithdraw;

//   const currentTotalBalance = previousBalanceTotal - newWithdrawAmount;
//   balanceTotalElement.innerText = currentTotalBalance;
// });
