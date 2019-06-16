//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button


//reference to the billString
var billStringTextElem = document.querySelector('.billStringText');

//reference to the calculate button
var calculateBtnElem = document.querySelector('.calculateBtn');

//reference to the billTotal element
var billTotalElem = document.querySelector('.billTotal');

//create the function that will be called when the calculate button is pressed
function calculateStringFun() {
    var billStringValue = billStringTextElem.value;
    var callsTotal = 0;
    var billList = billStringValue.split(', ')
   
    for (var i = 0; i < billList.length; i++) {
        if (billList[i] === "call") {
            callsTotal += 2.75;
        }
        else if (billList[i] === "sms") {
            callsTotal += 0.75;
        }
    
   
       if (callsTotal >= 30) {
        billTotalElem.classList.remove('warning')
        billTotalElem.classList.add('danger');        
    }
  else  if (callsTotal >= 20) {
        billTotalElem.classList.add('warning');
        billTotalElem.classList.remove('danger')
    }
    else{
        billTotalElem.classList.remove('warning');
        billTotalElem.classList.remove('danger')
    }
     
}  
   
    billTotalElem.innerHTML = callsTotal.toFixed(2);
}

calculateBtnElem.addEventListener('click', calculateStringFun)
