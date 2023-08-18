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

//   withdrawTotalElement.innerText = currentTotalWithdraw;
//   withdrawAmountField.value = "";
//   // Withdraw balance substract from total balance
//   const balanceTotalElement = document.getElementById("balance-total");
//   const previousBalanceTotalString = balanceTotalElement.innerText;
//   const previousBalanceTotal = parseFloat(previousBalanceTotalString);
//   const currentTotalBalance = previousBalanceTotal - newWithdrawAmount;
//   balanceTotalElement.innerText = currentTotalBalance;
// });

function depositCalculation() {
  const depositAmountField = document.getElementById("deposit-input");
  const newDepositAmountString = depositAmountField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  const currentTotalDeposit = previousDepositTotal + newDepositAmount;

  depositTotalElement.innerText = currentTotalDeposit;
  depositAmountField.value = "";
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

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  const currentTotalWithdraw = previousWithdrawTotal + newWithdrawAmount;

  withdrawTotalElement.innerText = currentTotalWithdraw;
  withdrawAmountField.value = "";
  // Withdraw balance substract from total balance
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  const currentTotalBalance = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentTotalBalance;
}
