// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var billTypeTextElem = document.querySelector('.billTypeText');
var addToBillBtnElem = document.querySelector(".addToBillBtn");

var callTotalOneElem = document.querySelector('.callTotalOne');
var smsTotalOneElem = document.querySelector(".smsTotalOne");
var totalOneElem = document.querySelector(".totalOne");

var radioElem = document.querySelector('.totalOne');
var smsTotalValue = 0;
var callTotalValue = 0;
var totalBillCost = 0;


function textBillFunction() {

    var billList = billTypeTextElem.value;

    if (billList === "call") {
        callTotalValue += 2.75;
    }
    else if (billList === "sms") {
        smsTotalValue += 0.75;
    }

    var totalBillCost = callTotalValue + smsTotalValue;
    callTotalOneElem.innerHTML = callTotalValue.toFixed(2);
    smsTotalOneElem.innerHTML = smsTotalValue.toFixed(2);
    totalOneElem.innerHTML = totalBillCost.toFixed(2);

    if (totalBillCost >= 20) {
        totalOneElem.classList.add('warning')
    }
    if (totalBillCost >= 30) {
        totalOneElem.classList.add('danger')
    }
}

addToBillBtnElem.addEventListener('click', textBillFunction);
