// document.getElementById('btn-withdraw').addEventListener('click', function(){
    
//     const getWithdraw=document.getElementById('withdraw-fild');
//     const withdrawString=getWithdraw.value;
//     const withdrawAmount= parseFloat(withdrawString);

//      // clear:::
//      getWithdraw.value='';

//      if(isNaN(withdrawAmount)){
//         alert ('Enter a valid Number');
//         return;
//      }


//     const getWithdrawTotalElement= document.getElementById('total-withdraw');
//     const previousWithdrawString= getWithdrawTotalElement.innerText;
//     const previousWithdrawAmount=parseFloat(previousWithdrawString);
   

//     const getBalanceTotal=document.getElementById('balance-total');
//     const getBalanceString= getBalanceTotal.innerText;
//     const getBalanceAmount= parseFloat(getBalanceString);

//     if(withdrawAmount>getBalanceAmount){
//         alert("Sorry You Can't Withdraw Money")
//         return;
//     }
//     const totalResult=previousWithdrawAmount + withdrawAmount;
//     getWithdrawTotalElement.innerText=totalResult;

//     const newBalanceTotal= getBalanceAmount - withdrawAmount;
//     getBalanceTotal.innerText=newBalanceTotal;
    
// })


document.getElementById('btn-withdraw').addEventListener('click',function(){
    let dorsiWithdrawInput=document.getElementById('withdraw-fild');
    let withdrawText= dorsiWithdrawInput.value;
    let gotNumber =parseFloat(withdrawText);
    
    // clear++++=
    dorsiWithdrawInput.value='';
    if(isNaN(gotNumber)){
        alert('Type Number ')
        return;
    }

    let dorsiWithdrawBox= document.getElementById('total-withdraw');
    let gotValueString= dorsiWithdrawBox.innerText;
    let covertBoxNumber=parseFloat(gotValueString);
    
    
     let dorsiBalanceBox= document.getElementById('balance-total');
     let balanceStringBox=dorsiBalanceBox.innerText;
     let convertBalanceNumber= parseFloat(balanceStringBox);

     if(gotNumber>convertBalanceNumber){
        alert('Tor Baap Er Bank e Eto TK Nai')
        return;
     }

     let sumWithdrawToBoxNumber= covertBoxNumber + gotNumber;
     dorsiWithdrawBox.innerText=sumWithdrawToBoxNumber;

     let findBalanceBoxTotal= convertBalanceNumber - gotNumber;
     dorsiBalanceBox.innerText=findBalanceBoxTotal;
     

})