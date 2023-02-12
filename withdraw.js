document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const getWithdraw=document.getElementById('withdraw-fild');
    const withdrawString=getWithdraw.value;
    const withdrawAmount= parseFloat(withdrawString);

     // clear:::
     getWithdraw.value='';

     if(isNaN(withdrawAmount)){
        alert ('Enter a valid Number');
        return;
     }


    const getWithdrawTotalElement= document.getElementById('total-withdraw');
    const previousWithdrawString= getWithdrawTotalElement.innerText;
    const previousWithdrawAmount=parseFloat(previousWithdrawString);
   

    const getBalanceTotal=document.getElementById('balance-total');
    const getBalanceString= getBalanceTotal.innerText;
    const getBalanceAmount= parseFloat(getBalanceString);

    if(withdrawAmount>getBalanceAmount){
        alert("Sorry You Can't Withdraw Money")
        return;
    }
    const totalResult=previousWithdrawAmount + withdrawAmount;
    getWithdrawTotalElement.innerText=totalResult;

    const newBalanceTotal= getBalanceAmount - withdrawAmount;
    getBalanceTotal.innerText=newBalanceTotal;
    
})