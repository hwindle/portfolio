export {validateCred, findInvalidCards, idInvalidCardCompanies};


// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8,  3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [9, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [9, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [9, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above



// Add your functions below:
const validateCred = (creditArray) => {
  /* luhn algorithm
    Free Formatter’s method

    Remove the last element from the array, the check digit.
    Reverse the array (now without the last digit) slice to remove the last check digit first.
    Multiply the digits in odd positions 
    If the resulting number is over 9, subtract 9 from the number.
    Add up all the numbers in the array as well as the dropped digit from step 1. 
    If the sum modulo 10 is 0 then the array contains a valid number. 
    Else, if the result is any number but 0, then the array contains an invalid number.
  */

  const checkDigit = creditArray[creditArray.length - 1];
  let reversedArray = creditArray.slice(0, -1);
  reversedArray.reverse();
  const multipliedArray = [];
  for (let i = 0; i < reversedArray.length; i++) {
    // find odd positions
    if (i % 2 !== 0) {
      let newNum = reversedArray[i] * 2;
      // if over 9, subtract 9 from the number.
      if (newNum > 9) newNum -= 9;
      multipliedArray[i] = newNum;
    } else {
      // even numbers - copy the number without modifying
      multipliedArray[i] = reversedArray[i];
    }
  }
  // adding up all the numbers in the array
  let totalToCheck = multipliedArray.reduce((total, value) => {
    return total + value;
  }, 0);
  // adding the check digit
  totalToCheck += checkDigit;
  //console.log(totalToCheck);
  // equates to true or false
  return totalToCheck % 10 == 0;
};

const findInvalidCards = (creditNestedArr) => {
  /*
    The role of findInvalidCards() is to check through the nested array for which numbers are invalid, 
    and return another nested array of invalid cards. 
  */
  const invalidCards = [];
  for (card of creditNestedArr) { 
    if (!validateCred(card)) {
      invalidCards.push(card);
    }  
  }
  return invalidCards;
};

// the below could be used on valid cards to select card issuer in GUI.
const idInvalidCardCompanies = (invalidCards) => {
  let companies = [];
  for (let i = 0; i < invalidCards.length; i++) {
    const firstNum = invalidCards[i][0];
    console.log(firstNum);
    switch (firstNum) {
      case 3:
        if (companies.indexOf('Amex') == -1) {
          companies.push('Amex');
        }
        break;
      case 4:
        if (companies.indexOf('Visa') == -1) {
          companies.push('Visa');
        }
        break;
      case 5: 
        if (companies.indexOf('Mastercard') == -1) {
          companies.push('Mastercard');
        }
        break;
      case 6:
        if (companies.indexOf('Discover') == -1) {
          companies.push('Discover');
        }
        break;
      default:
        console.log('Company not found!');
    } // end switch
  }
  return companies;
};

// console.log(validateCred(mystery1));


