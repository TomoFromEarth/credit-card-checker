// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];
const invalid6 = [9, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, invalid6, mystery1, mystery2, mystery3, mystery4, mystery5,];

// paypal object test credit card account numbers *NOTE THESE PASS AND SHOULD NOT!!!
const payPalTest1 = [3,7,8,2,8,2,2,4,6,3,1,0,0,0,5];
const payPalTest2 = [3,7,1,4,4,9,6,3,5,3,9,8,4,3,1];
const payPalTest3 = [3,7,8,7,3,4,4,9,3,6,7,1,0,0,0];
const payPalTest4 = [5,6,1,0,5,9,1,0,8,1,0,1,8,2,5,0];
const payPalTest5 = [3,0,5,6,9,3,0,9,0,2,5,9,0,4];
const payPalTest6 = [3,8,5,2,0,0,0,0,0,2,3,2,3,7];
const payPalTest7 = [6,0,1,1,0,0,0,9,9,0,1,3,9,4,2,4];
const batch2 = [payPalTest1, payPalTest2, payPalTest3, payPalTest4, payPalTest5, payPalTest6, payPalTest7];

// check if even number
const validateCred = (arr) => {
  if (arr.length % 2 === 0) {
    arr = arr.map((digit, i) => (i % 2 === 0 ? digit * 2 : digit));
  } else {
    arr = arr.map((digit, i) => (i % 2 === 1 ? digit * 2 : digit));
  }
  // fix double digits
  arr = arr.map((digit) => (digit > 9 ? digit - 9 : digit));
  // sum digits
  const sum = arr.reduce((a, b) => (a += b), 0);
  return sum % 10 === 0;
};
// Find invalid card numbers from nested array
const findInvalidCards = (nestedArr) => {
  // container for invalid card numbers
  invalidCards = [];
  nestedArr.forEach((c) => {
    if (!validateCred(c)) {
      invalidCards.push(c);
    }
  });
  return invalidCards;
};
//identify companies with invalid cards issued
const idInvalidCardCompanies = (arr) => {
  invCards = findInvalidCards(arr);
  cardCompanies = [];
  invCards.forEach((c) => {
    if (c[0] === 3) {
      cardCompanies.push("Amex (American Express)");
    }
    if (c[0] === 4) {
      cardCompanies.push("Visa");
    }
    if (c[0] === 5) {
      cardCompanies.push("Mastercard");
    }
    if (c[0] === 6) {
      cardCompanies.push("Discover");
    } else {
      cardCompanies.push("Company Not Found.");
    }
  });
  //container for filtered card companies to be notified
  notifyCompanies = [];
  cardCompanies.forEach((c) => {
    if (!notifyCompanies.includes(c)) {
      notifyCompanies.push(c);
    }
  });
  return notifyCompanies;
};

// TEST CASES
console.log(validateCred(valid1));
console.log(validateCred(valid2));
console.log(validateCred(valid3));
console.log(validateCred(valid4));
console.log(validateCred(valid5));
console.log(validateCred(invalid1));
console.log(validateCred(invalid2));
console.log(validateCred(invalid3));
console.log(validateCred(invalid4));
console.log(validateCred(invalid5));
console.log(validateCred(mystery1));
console.log(validateCred(mystery2));
console.log(validateCred(mystery3));
console.log(validateCred(mystery4));
console.log(validateCred(mystery5));
console.log(findInvalidCards(batch));
console.log(validateCred(payPalTest1));
console.log(validateCred(payPalTest2));
console.log(validateCred(payPalTest3));
console.log(validateCred(payPalTest4));
console.log(validateCred(payPalTest5));
console.log(validateCred(payPalTest6));
console.log(validateCred(payPalTest7));
console.log(findInvalidCards(batch2));
console.log(idInvalidCardCompanies(batch));