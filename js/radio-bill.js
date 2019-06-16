// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");
var callTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwoElem = document.querySelector(".totalTwo");

var callSum = 0;
var smsSum = 0;
var totalSum = 0;

function addRadioFun(){
    var elem = document.querySelector("input[name='billItemType']:checked");

    if(elem){

        if(elem.value === "call"){
            callSum += 2.75;   
        }
      else if(elem.value === "sms"){
               smsSum += 0.75;
        }
    
    
        callTotalTwoElem.innerHTML = callSum.toFixed(2);
        smsTotalTwoElem.innerHTML = smsSum.toFixed(2);
        totalSum = callSum + smsSum;   
        totalTwoElem.innerHTML = totalSum.toFixed(2);  
     
        if(totalSum >= 30){
            totalTwoElem.classList.add('warning');
        }
         if(totalSum >= 50){
            totalTwoElem.classList.add('danger');
         }
        }
}




radioBillAddBtnElem.addEventListener('click', addRadioFun)
