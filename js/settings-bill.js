// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");


var callCostSettingElem = document.querySelector(".callCostSetting");
var smsCostSettingElem = document.querySelector(".smsCostSetting");
var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");

var updateSettingsElem = document.querySelector(".updateSettings");
var addBtnSettingsElem = document.querySelector(".buttonSettings");

var callsTotalSettings = 0;
var smsTotalSettings = 0;
var totalSettings = 0;

function addFunction() {
  var settingsRadioElem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  var radio = settingsRadioElem.value;

  if (radio === "call") {
    callsTotalSettings += Number(callCostSettingElem.value);
  }
  else if (radio === "sms") {
    smsTotalSettings += Number(smsCostSettingElem.value);
  }
  callTotalSettingsElem.innerHTML = callsTotalSettings.toFixed(2);
  smsTotalSettingsElem.innerHTML = smsTotalSettings.toFixed(2);
  totalSettings = callsTotalSettings + smsTotalSettings
  totalSettingsElem.innerHTML = totalSettings.toFixed(2);

  if (totalSettings >= criticalLevelSettingElem.value) {
    totalSettingsElem.classList.remove('warning')
    totalSettingsElem.classList.add('danger');
    addBtnSettingsElem.disabled = true;
  }
  else if (totalSettings >= warningLevelSettingElem.value) {
    totalSettingsElem.classList.add('warning');
    totalSettingsElem.classList.remove('danger')
  }
}

function updateSetting() {

  if (addBtnSettingsElem) {
    addBtnSettingsElem.disabled = false;
    totalSettingsElem.classList.remove('danger');
  }
    if (totalSettings >= warningLevelSettingElem.value) {
      totalSettingsElem.classList.add('warning');
    }

}
addBtnSettingsElem.addEventListener('click', addFunction)
updateSettingsElem.addEventListener('click', updateSetting)