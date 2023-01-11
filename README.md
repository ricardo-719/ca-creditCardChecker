# Credit Card Checker

This is a JavaScript project that performs a pre-liminary validity check of credit cards based on their numbers. This is a Codecademy and CS50x assignment project.

This program perform different validity tests to confirm that the number on the credit card is valid. These checks include verifying the number of digits on the card, first and second number on the card, and the **Luhn Algorithm**.

## The Luhn Algorithm

Most cards use an algorithm invented by Hans Peter Luhn of IBM. According to Luhn’s algorithm, you can determine if a credit card number is (syntactically) valid as follows:

1. Multiply every other digit by 2, starting with the number’s second-to-last digit, and then add those products’ digits together.

2. Add the sum to the sum of the digits that weren’t multiplied by 2.

3. If the total’s last digit is 0 (or, put more formally, if the total modulo 10 is congruent to 0), the number is valid!

## Implementation

In the program there are 15 arrays that each contain the digits of separate credit card numbers. They all have prefixes to reflect their status, i.e. variables that start with valid contain a valid number, whereas invalid do not, and mystery variables can be either. There is also a batch array that stores all of the provided credit cards in a single array.

As per requirements I have created validateCred() function that has a parameter of an array. The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function call upon other functions to perform different tests such as number of digits, Luhn's algorithm and first two digits verification.

Additionally, the function findInvalidCards() that has one parameter for a nested array of credit card numbers, checks through the nested array for which numbers are invalid, and return another nested array of invalid cards. After finding all the invalid credit card numbers, it identifies the credit card companies that have possibly issued these faulty numbers following this table:

- **First Digit :** 3  | **Company:** Amex (American Express)
- **First Digit :** 4  | **Company:** Visa
- **First Digit :** 5  | **Company:** Mastercard
- **First Digit :** 6  | **Company:** Discover

This function returns an array of unique elements.