
// document.getElementById('deposit-btn').addEventListener('click',function(){
    
//     const findDeposit=document.getElementById('input-deposit');
//     const getDepositString=findDeposit.value;
//     const getDeposit= parseFloat(getDepositString);

//     // clear::::::::
//     findDeposit.value='';

//     if(isNaN(getDeposit)){
//         alert ('Enter a valid Number');
//         return;
//      }
//     const depositTotalElement=document.getElementById('deposit-total');
//     const depositTotalString=depositTotalElement.innerText;
//     const depositTotal= parseFloat(depositTotalString)
   
//     const currentDepositTotal=depositTotal+getDeposit
//     depositTotalElement.innerText=currentDepositTotal;

//     const findBalanceTotal=document.getElementById('balance-total');
//     const balanceString= findBalanceTotal.innerText;
//     const balanceTotal= parseFloat(balanceString);

//     const currentBalanceTotal= balanceTotal + getDeposit;
//     findBalanceTotal.innerText=currentBalanceTotal
        
// })

document.getElementById('deposit-btn').addEventListener('click',function(){
    let dorsiInput=document.getElementById('input-deposit');
    let inputText=dorsiInput.value;
    let covertNumber=parseFloat(inputText);


    // clear;;
    dorsiInput.value='';
    if(isNaN(covertNumber)){
        alert('Type Any Number')
        return;
    }

    let dorsiDeposit=document.getElementById('deposit-total');
    let depositText=dorsiDeposit.innerText;
    let convertDepositNumber=parseFloat(depositText);
    
    let sumDepositToInput=convertDepositNumber + covertNumber;
    dorsiDeposit.innerText=sumDepositToInput;


    let dorsiBalance=document.getElementById('balance-total');
    let balanceText=dorsiBalance.innerText;
    let covertBalance=parseFloat(balanceText);
    
    let sumBalanceToInput= covertBalance + covertNumber;
    dorsiBalance.innerText=sumBalanceToInput;

})