const dispaly = document.getElementById('display');
function appendToDisplay(input) {
    dispaly.value += input;

}
function clearDisplay() {
dispaly.value ='';
}
function calculate() {
dispaly.value =eval(dispaly.value);
}
