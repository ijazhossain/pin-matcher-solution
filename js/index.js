function generatePin() {
    const pin = Math.floor(Math.random() * 10000);
    return pin;
}
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
};
function verifyPin() {
    const generatedPin = document.getElementById('pin-field').value;
    const typedPin = document.getElementById('display-pin').value;
    const successMsg = document.getElementById('success-msg');
    const errorMsg = document.getElementById('error-msg');
    if (generatedPin === typedPin) {
        successMsg.style.display = 'block'
        errorMsg.style.display = 'none';
    } else {
        successMsg.style.display = 'none'
        errorMsg.style.display = 'block';
    }

};
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const pinField = document.getElementById('pin-field');
    pinField.value = pin;
});
document.getElementById('pin-digits-container').addEventListener('click', function (event) {
    const typedPinField = document.getElementById('display-pin');
    const newPinDigit = event.target.innerText;
    if (isNaN(newPinDigit)) {
        if (newPinDigit === 'C') {
            typedPinField.value = '';
        }
        if (newPinDigit === '<') {
            const splitPin = typedPinField.value.split('');
            splitPin.pop();
            typedPinField.value = splitPin.join('');
        }
    } else {
        const currentPinDigit = typedPinField.value;
        const typedPin = currentPinDigit + newPinDigit;
        typedPinField.value = typedPin;
    }

});
document.getElementById('verify-btn').addEventListener('click', function () {
    verifyPin();
})