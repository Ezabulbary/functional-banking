function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputeAmountText = inputField.value;
    const inputAmountValue = parseFloat(inputeAmountText);

    inputField.value = '';

    return inputAmountValue;
};


document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previusDepositTotal  = parseFloat(depositTotalText);

    const totalDeposit = previusDepositTotal + depositAmount;
    depositTotal.innerText = totalDeposit;

    const balanceTotal = document.getElementById('blance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);

    const totalBalance = previusBalanceTotal + depositAmount;
    balanceTotal.innerText = totalBalance;
});


document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previusWithdraw = parseFloat(withdrawTotalText);

    const totalWithdraw = previusWithdraw + withdrawAmount;
    withdrawTotal.innerText = totalWithdraw;

    const balanceTotal = document.getElementById('blance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);

    const totalBalance = previusBalanceTotal - withdrawAmount;
    balanceTotal.innerText = totalBalance;
});