// All valid credit card numbers
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
const validateCred = arr => {
    // check if even number
        if (arr.length % 2 === 0) {
        arr = arr.map((digit, i) => i % 2 === 0 ? digit * 2 : digit);
        } else {
        arr = arr.map((digit, i) => i % 2 === 1 ? digit * 2 : digit);
          }
    // fix double digits
        arr = arr.map(digit => digit > 9 ? digit - 9 : digit);
        
    // sum digits
        const sum = arr.reduce((a, b) => a += b, 0);
        return sum % 10 == 0
};

// find invalid cards
const findInvalidCards = nestedArr => {
    // container for invalid card numbers
    let invalidCards = [];
    nestedArr.forEach((c) => {
        if (!validateCred(c)) {
            invalidCards.push(c)
        }
    })
        console.log(invalidCards);
};
      console.log(validateCred(valid1))
      console.log(validateCred(valid2))
      console.log(validateCred(valid3))
      console.log(validateCred(valid4))
      console.log(validateCred(valid5))
      console.log(validateCred(invalid1))
      console.log(validateCred(invalid2))
      console.log(validateCred(invalid3))
      console.log(validateCred(invalid4))
      console.log(validateCred(invalid5))
      console.log(validateCred(mystery1))
      console.log(validateCred(mystery2))
      console.log(validateCred(mystery3))
      console.log(validateCred(mystery4))
      console.log(validateCred(mystery5))
      console.log(findInvalidCards(batch))




      // const checkCreditCard = cardnumber => {
  
//   //Error messages
//   const ccErrors = [];
//   ccErrors [0] = "Unknown card type";
//   ccErrors [1] = "No card number provided";
//   ccErrors [2] = "Credit card number is in invalid format";
//   ccErrors [3] = "Credit card number is invalid";
//   ccErrors [4] = "Credit card number has an inappropriate number of digits";
//   ccErrors [5] = "Warning! This credit card number is associated with a scam attempt";
  
//   //Response format
//   const response = (success, message = null, type = null) => ({
//     message,
//     success,
//     type
//   });
     
//   // Define the cards we support. You may add additional card types as follows.
  
//   //  Name:         As in the selection box of the form - must be same as user's
//   //  Length:       List of possible valid lengths of the card number for the card
//   //  prefixes:     List of possible prefixes for the card
//   //  checkdigit:   Boolean to say whether there is a check digit
//   const cards = [];
//   cards [0] = {name: "Visa", 
//                length: "13,16", 
//                prefixes: "4",
//                checkdigit: true};
//   cards [1] = {name: "MasterCard", 
//                length: "16", 
//                prefixes: "51,52,53,54,55",
//                checkdigit: true};
//   cards [2] = {name: "DinersClub", 
//                length: "14,16", 
//                prefixes: "36,38,54,55",
//                checkdigit: true};
//   cards [3] = {name: "CarteBlanche", 
//                length: "14", 
//                prefixes: "300,301,302,303,304,305",
//                checkdigit: true};
//   cards [4] = {name: "AmEx", 
//                length: "15", 
//                prefixes: "34,37",
//                checkdigit: true};
//   cards [5] = {name: "Discover", 
//                length: "16", 
//                prefixes: "6011,622,64,65",
//                checkdigit: true};
//   cards [6] = {name: "JCB", 
//                length: "16", 
//                prefixes: "35",
//                checkdigit: true};
//   cards [7] = {name: "enRoute", 
//                length: "15", 
//                prefixes: "2014,2149",
//                checkdigit: true};
//   cards [8] = {name: "Solo", 
//                length: "16,18,19", 
//                prefixes: "6334,6767",
//                checkdigit: true};
//   cards [9] = {name: "Switch", 
//                length: "16,18,19", 
//                prefixes: "4903,4905,4911,4936,564182,633110,6333,6759",
//                checkdigit: true};
//   cards [10] = {name: "Maestro", 
//                length: "12,13,14,15,16,18,19", 
//                prefixes: "5018,5020,5038,6304,6759,6761,6762,6763",
//                checkdigit: true};
//   cards [11] = {name: "VisaElectron", 
//                length: "16", 
//                prefixes: "4026,417500,4508,4844,4913,4917",
//                checkdigit: true};
//   cards [12] = {name: "LaserCard", 
//                length: "16,17,18,19", 
//                prefixes: "6304,6706,6771,6709",
//                checkdigit: true};
   
//   // Ensure that the user has provided a credit card number
//   if (cardnumber.length == 0)  {
//      return response(false, ccErrors[1]);
//   }
    
//   // Now remove any spaces from the credit card number
//   // Update this if there are any other special characters like -
//   cardnumber = cardnumber.replace (/\s/g, "");
  
//   // Validate the format of the credit card
//   // luhn's algorithm
//   if(!validateCardNumber(cardnumber)){
//     return response(false, ccErrors[2]);
//   }
 
//   // Check it's not a spam number
//   if (cardnumber == '5490997771092064') { 
//     return response(false, ccErrors[5]);
//   }

//   // The following are the card-specific checks we undertake.
//   let lengthValid = false;
//   let prefixValid = false; 
//   let cardCompany = "";
  
//   // Check if card belongs to any organization
//   for(let i = 0; i < cards.length; i++){
//     const prefix = cards[i].prefixes.split(",");
    
//     for (let j = 0; j < prefix.length; j++) {
//       const exp = new RegExp ("^" + prefix[j]);
//       if (exp.test (cardnumber)) {
//         prefixValid = true;
//       }
//     }
    
//     if(prefixValid){
//       const lengths = cards[i].length.split(",");
//       // Now see if its of valid length;
//       for (let j=0; j < lengths.length; j++) {
//         if (cardnumber.length == lengths[j]) {
//           lengthValid = true;
//         }
//       }
//     }
    
//     if(lengthValid && prefixValid){
//       cardCompany = cards[i].name;
//       return response(true, null, cardCompany);
//     }  
//   }
  
//   // If it isn't a valid prefix there's no point at looking at the length
//   if (!prefixValid) {
//      return response(false, ccErrors[3]);
//   }
  
//   // See if all is OK by seeing if the length was valid
//   if (!lengthValid) {
//      return response(false, ccErrors[4]);
//   };   
  
//   // The credit card is in the required format.
//   return response(true, null, cardCompany);
// }