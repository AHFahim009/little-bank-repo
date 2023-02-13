// target diposite button
document.getElementById('deposite-button').addEventListener('click',function(){

    const depositefield = document.getElementById('deposite-field');
    const getdepositestring = depositefield.value;
    const getnewdepositecorrect = parseFloat(getdepositestring);
    
    
    
    const depositetotal = document.getElementById('deposite-total')
    const getdepositetotalstring = depositetotal.innerText;
    const getdepositetotalcorrect = parseFloat(getdepositetotalstring);
    
   const updatetotal = getnewdepositecorrect + getdepositetotalcorrect;
   depositetotal.innerText = updatetotal;

//    update balance total

const balancetotal = document.getElementById('balance-total');
const getbalancetotalstring = balancetotal.innerText
const getbalancetotalcorrect = parseFloat(getbalancetotalstring);
// calculate
const updatebalance = getbalancetotalcorrect + getnewdepositecorrect

   balancetotal.innerText = updatebalance; 
    


    depositefield.value= '';
})