document.getElementById('withdraw-button').addEventListener('click', function(){
   
    const withdrawfield = document.getElementById('withdraw-field');
    const newwithdrawstring = withdrawfield.value;
    const newwithdraw = parseFloat(newwithdrawstring);
    

    const withdrawtotal = document.getElementById('withdraw-total');
    const getwithdrawtotalstring = withdrawtotal.innerText;
    const getgwithdrawtotal = parseFloat(getwithdrawtotalstring);

  

    
    // update balance totla
    const balancetotal = document.getElementById('balance-total');
    const getbalancetotalstring = balancetotal.innerText
    const getbalancetotalcorrect = parseFloat(getbalancetotalstring);

    withdrawfield.value= '';

    if(newwithdraw > getbalancetotalcorrect){
        alert('Abbe sala ');
        return;
    }


    const updatewithdrawtotal = newwithdraw + getgwithdrawtotal;
    withdrawtotal.innerText = updatewithdrawtotal;


// calculate
const updatebalance = getbalancetotalcorrect - newwithdraw;

   balancetotal.innerText = updatebalance; 

  


   
})