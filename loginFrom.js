document.getElementById('btn-submit').addEventListener('click',function(){
    const email=document.getElementById('user-email')
    const emailFiled=email.value;
    const password=document.getElementById('user-password');
    const passwordFiled=password.value;
    email.value='';
    password.value='';
    if(emailFiled==="likhon"&& passwordFiled==='1234'){
       window.location.href='bank.html'
    }
    else{
        alert('Sorry Your Are Not a valid User')
    }
})