
function gotoregister(){
    window.location="register.html"
}
function register(){
    const bank={
        uname:uname.value,
        acno:acno.value,
        pswd:pswd.value,
        balance:0
    }
    if(bank.uname==""||bank.acno==""||bank.pswd==""){
alert('Fill all the fields')
    }
    else{
        if(bank.acno in localStorage){
            alert('Account already existed')
        }
        else{
            localStorage.setItem(bank.acno,JSON.stringify(bank))
            alert('Account created sucessfully')
            window.location="./login.html"
        }
    }

}

function login(){
    let acno=document.getElementById('acno').value
    let pswd=document.getElementById('pswd').value
    if(acno==""||pswd==""){
        alert('Enter all the fields')
    }
    else{
        if(acno in localStorage){
            let bankk=JSON.parse(localStorage.getItem(acno))
            if(pswd==bankk.pswd){
                localStorage.setItem('login',JSON.stringify(bankk))
                alert('login sucessful')

                window.location="./home.html"
            }
            else{
                alert('incorrect password')
            }
        }
        else{
            alert('account does not found. register new account')
            window.location="./register.html"
        }
    }
}
//deposit
function deposit(){
    amount=amt.value;
    amount=Math.floor(amount);
    pswd=deposit_pswd.value;
    let Acc = JSON.parse(localStorage.getItem(pswd));
    console.log(Acc);
    if(amount == ""||pswd==""){
        alert("Enter all the fields");
    }
    else{
        if(pswd in localStorage){
            if(pswd==Acc.pswd){
                Acc.balance+=amount;
                deposit_balance.innerHTML =`<p class="text-success text-center">Deposit Successful , <span class="text-secondary">Current Balance Is : ₹${Acc.balance}</span></p>`;
                localStorage.setItem(Acc.pswd,JSON.stringify(Acc))
            }
        }
        else{
            alert("incorrect password")
        }
    }
}


//withdraw

function withdraw(){
    amount = widh_amt.value;
    amount=Math.floor(amount)
    pswd=widh_pswd.value

    if(amount=="" ||pswd.value==""){
alert('fill all details')
    }
    else{
        if(pswd in localStorage){
            let Acc= JSON.parse(localStorage.getItem(pswd))
            if(pswd==Acc.pswd){
                if(Acc.balance> amount){
                    Acc.balance -= amount;
                    withdraw_balance.innerHTML = `<p class="text-success text-center">Withdraw Successfull ,<span class="text-secondary"> Current Balance Is : ₹ ${Acc.balance}</span></p>`;
                    localStorage.setItem(Acc.pswd,JSON.stringify(Acc))
                }
                else{

                }
            }
        }
        else{
            alert("incorrect password")
        }
    }

}


 function logout(){
    localStorage.clear()
 }
        