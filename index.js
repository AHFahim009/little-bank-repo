document.getElementById('submit-button').addEventListener('click',function(){
    // steps 2 : email field
    const emailfield = document.getElementById('user-email');
    const email = emailfield.value
    
    // step 3: password field
    const passwordinput = document.getElementById('password-field')
    const password = passwordinput.value
    

    // valid user and password
    if(email=== 'practice@gmail.com' &&  password=== 'practice' ){
        window.location.href = 'bankpage.html';
    }
    else{
        console.log("Wrong information")
        alert('Go home bro. This is not your place')
    }
})
