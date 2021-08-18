function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin);
        return getPin();

    }

}




function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;


}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    if (isNaN(number)) {
        console.log(number);
    }
    else {
        const calcInput = document.getElementById('type-numbers');
        const previusNmuber = calcInput.value;
        const newNumber = previusNmuber + number;
        calcInput.value = newNumber;
    }


})