
document.getElementById('deposit-btn').addEventListener('click',function(){
    
    const findDeposit=document.getElementById('input-deposit');
    const getDepositString=findDeposit.value;
    const getDeposit= parseFloat(getDepositString);

    // clear::::::::
    findDeposit.value='';

    if(isNaN(getDeposit)){
        alert ('Enter a valid Number');
        return;
     }
    const depositTotalElement=document.getElementById('deposit-total');
    const depositTotalString=depositTotalElement.innerText;
    const depositTotal= parseFloat(depositTotalString)
   
    const currentDepositTotal=depositTotal+getDeposit
    depositTotalElement.innerText=currentDepositTotal;

    const findBalanceTotal=document.getElementById('balance-total');
    const balanceString= findBalanceTotal.innerText;
    const balanceTotal= parseFloat(balanceString);

    const currentBalanceTotal= balanceTotal + getDeposit;
    findBalanceTotal.innerText=currentBalanceTotal
        
})