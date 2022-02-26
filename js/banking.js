function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputeAmountText = inputField.value;
    const inputAmountValue = parseFloat(inputeAmountText);

    inputField.value = '';

    return inputAmountValue;
};

function updateTotalField(totalField, amoumt){
    debugger;
    const totalElement = document.getElementById(totalField);
    const previusTotalText = totalElement.innerText;
    const previusTotal = parseFloat(previusTotalText);

    totalElement.innerText = previusTotal + amoumt;
}

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');

    updateTotalField('deposit-total', depositAmount);

    const balanceTotal = document.getElementById('blance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);

    const totalBalance = previusBalanceTotal + depositAmount;
    balanceTotal.innerText = totalBalance;
});


document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');

    updateTotalField('withdraw-total', withdrawAmount);

    const balanceTotal = document.getElementById('blance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);

    const totalBalance = previusBalanceTotal - withdrawAmount;
    balanceTotal.innerText = totalBalance;
});