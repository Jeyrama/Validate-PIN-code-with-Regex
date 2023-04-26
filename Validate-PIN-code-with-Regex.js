/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes 
cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, 
return true, else return false.
*/


// Solution

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

// or

function validatePIN (pin) {

  let pinlen = pin.length;
  let isCorrectLength = (pinlen == 4 || pinlen == 6);
  let hasOnlyNumbers = pin.match(/^\d+$/);

  if (isCorrectLength && hasOnlyNumbers) {
    return true;
  }
  return false;
}