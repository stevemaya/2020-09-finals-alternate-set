// Your code goes below:
const fizzBuzzSingleNumber = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}


const yellAll = (arr) => {
  const yelled = arr.map(function(str) {
    return str.toUpperCase();
  });
  return yelled;
}


const triStateArea = (cities) => {
  const triState = cities.filter(function(city) {
    return city.toLowerCase().endsWith('ny') || city.toLowerCase().endsWith('nj') || city.toLowerCase().endsWith('ct');
  });
  return triState;
};


const uppercaseCount = (strs) => {
  const newArr = [];
  for (const str of strs) {
    if(str.toUpperCase() === str) {
      newArr.push(str);
    }
  }
  return newArr.length;
}

const containsDigit = (strs) => {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  for (const str of strs) {
    if(str.includes(alpha)) {
      return false; 
    } else if (!str.includes(alpha)) {
      return true;
    } else {
      return false;
    }
  }
}



/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof fizzBuzzSingleNumber === "undefined") {
  fizzBuzzSingleNumber = undefined;
}

if (typeof yellAll === "undefined") {
  yellAll = undefined;
}

if (typeof triStateArea === "undefined") {
  triStateArea = undefined;
}

if (typeof uppercaseCount === "undefined") {
  uppercaseCount = undefined;
}

if (typeof containsSpace === "undefined") {
  containsSpace = undefined;
}

if (typeof containsDigit === "undefined") {
  containsDigit = undefined;
}

if (typeof containsLowerCase === "undefined") {
  containsLowerCase = undefined;
}

if (typeof containsUpperCase === "undefined") {
  containsUpperCase = undefined;
}

if (typeof containsNonAlphanumeric === "undefined") {
  containsNonAlphanumeric = undefined;
}

if (typeof isValidPassword === "undefined") {
  isValidPassword = undefined;
}

if (typeof getToBed === "undefined") {
  getToBed = undefined;
}

if (typeof digits === "undefined") {
  digits = undefined;
}

module.exports = {
  fizzBuzzSingleNumber,
  yellAll,
  triStateArea,
  uppercaseCount,
  containsSpace,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  isValidPassword,
  getToBed,
  digits,
};
