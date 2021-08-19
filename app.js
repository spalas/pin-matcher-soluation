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
    const calcInput = document.getElementById('type-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';

        }
    }
    else {

        const previusNmuber = calcInput.value;
        const newNumber = previusNmuber + number;
        calcInput.value = newNumber;

    }


});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('type-numbers').value;

    const successType = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successType.style.display = 'block';
        failError.style.display = 'none';



    }
    else {
        successType.style.display = 'none';
        failError.style.display = 'block';
    }

};

