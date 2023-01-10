// All valid credit card numbers
const valid0 = [4, 0, 0, 3, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4]
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = (cardNum) => {
    // Turn array into number to calculate number digits 
    //(.length makes this step unnecesary but I like it, so whatever)
    let joinCardNum = parseInt(cardNum.join(''));
    let numDigitsStatus = checkNumDigits(joinCardNum);
    console.log(numDigitsStatus)
    // Verify if card's luhn algo is valid (true) or invalid (false)
    let luhnAlgoStatus = luhnAlgoCalc(cardNum);
    console.log(luhnAlgoStatus)
    // Verify the first two numbers as per requirements
    let firstTwoNumbersStatus = checkFirstTwoNumbers(cardNum);
    console.log(firstTwoNumbersStatus)
    if (numDigitsStatus && luhnAlgoStatus && firstTwoNumbersStatus) {
        return true;
    } else {
        return false;
    }

}

// The number of digits must be 13, 15 or 16 digits long
const checkNumDigits = (cardNum) => {
    let digitCount = 0;
    do {
       cardNum = cardNum / 10;
       digitCount++;
    } while (cardNum >= 1)
    if (digitCount === 13 || digitCount === 15 || digitCount === 16) {
        return true;
    } else {
        return false;
    }
}

const luhnAlgoCalc = (cardNum) => {
    // Separate every other number from second-to-last
    // Multiply each digit by two and add them together
    // Add the sum to the sum of the digits that weren’t multiplied by 2
    let luhnVerificationOne = [];
    let luhnVerificationTwo = [];
    let indexCount = 0;
    for (let i = cardNum.length - 2; i >= 0; (i -= 2)) {
        luhnVerificationOne[indexCount] = cardNum[i] * 2;
        console.log(luhnVerificationOne[indexCount])
        // Numbers with more than two digits have to be added together
        if (luhnVerificationOne[indexCount] > 9) {
            let sum = 0;
            let numString = luhnVerificationOne[indexCount] + "";
            for (let j = 0; j < numString.length; j++) {
            sum = sum + Number(numString.charAt(j));
            }
            luhnVerificationOne[indexCount] = sum;
        }
        indexCount++;
    }
    console.log(luhnVerificationOne)
    indexCount = 0;
    for (let i = cardNum.length - 1; i >= 0; (i -= 2)) {
        luhnVerificationTwo[indexCount] = cardNum[i];
        indexCount++;
    }
    let sumVerificationOne = luhnVerificationOne.reduce((a, b) => a + b);
    console.log(sumVerificationOne)
    let sumVerificationTwo = luhnVerificationTwo.reduce((a, b) => a + b);
    console.log(sumVerificationTwo)
    let sumVerifications = sumVerificationOne + sumVerificationTwo;
    // If the total’s last digit is 0, the number is valid!
    if (sumVerifications % 10 === 0){
        return true;
    } else {
        return false;
    }
}

// Verification first two numbers of the credit card
// 34, 37, 51 to 55, 40 to 49
const checkFirstTwoNumbers = (cardNum) => {
   let firstTwoDigits = [...cardNum.slice(0, 2)];
   firstTwoDigits = parseInt(firstTwoDigits.join(''));
   if (firstTwoDigits === 34 || firstTwoDigits === 37 
    || firstTwoDigits > 39 && firstTwoDigits < 50  
    || firstTwoDigits > 50 && firstTwoDigits < 56 ) {
        return true;
    } else {
        return false;
    }
}

console.log(validateCred(valid1));



