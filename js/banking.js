document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositAmount = parseFloat(depositInputText);

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

    depositInput.value = '';
});


document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText);

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

    withdrawInput.value = '';
})