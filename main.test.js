const {
  fizzBuzzSingleNumber,
  yellAll,
  triStateArea,
  uppercaseCount,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  isValidPassword,
  getToBed,
  digits,
} = require("./main.js");

describe("fizzBuzzSingleNumber", () => {
  it(`returns the given number unchanged if it's not divisible by 3 or 5.`, () => {
    expect(fizzBuzzSingleNumber(1)).toBe(1);
    expect(fizzBuzzSingleNumber(2)).toBe(2);
    expect(fizzBuzzSingleNumber(4)).toBe(4);
    expect(fizzBuzzSingleNumber(7)).toBe(7);
  });

  it(`returns the string 'Fizz' if the given number is divisible by 3 but not by 5.`, () => {
    expect(fizzBuzzSingleNumber(3)).toBe("Fizz");
    expect(fizzBuzzSingleNumber(6)).toBe("Fizz");
    expect(fizzBuzzSingleNumber(9)).toBe("Fizz");
    expect(fizzBuzzSingleNumber(21)).toBe("Fizz");
    expect(fizzBuzzSingleNumber(303)).toBe("Fizz");
  });

  it(`returns the string 'Buzz' if the given number is divisible by 5 but not by 3.`, () => {
    expect(fizzBuzzSingleNumber(5)).toBe("Buzz");
    expect(fizzBuzzSingleNumber(10)).toBe("Buzz");
    expect(fizzBuzzSingleNumber(20)).toBe("Buzz");
    expect(fizzBuzzSingleNumber(50)).toBe("Buzz");
    expect(fizzBuzzSingleNumber(700)).toBe("Buzz");
  });

  it(`returns the string 'FizzBuzz' if the given number is divisible by both 3 and 5.`, () => {
    expect(fizzBuzzSingleNumber(15)).toBe("FizzBuzz");
    expect(fizzBuzzSingleNumber(30)).toBe("FizzBuzz");
    expect(fizzBuzzSingleNumber(300)).toBe("FizzBuzz");
  });
});

describe("yellAll", () => {
  it("capitalizes each string in the given array", () => {
    expect(yellAll(["hello there", "ahoy", "greetings"])).toEqual([
      "HELLO THERE",
      "AHOY",
      "GREETINGS",
    ]);
    expect(yellAll(["good-bye", "forever", "my lovely"])).toEqual([
      "GOOD-BYE",
      "FOREVER",
      "MY LOVELY",
    ]);
  });
});

describe("triStateArea", () => {
  it(`given an array of strings representing cities with their states, returns an array of only those places whose state is "NY" or "NJ" or "CT" (also known as "the Tri-State area")`, () => {
    const cities1 = [
      "Brooklyn, NY",
      "Stamford, CT",
      "Boston, MA",
      "Buffalo, NY",
      "Los Angeles, CA",
    ];

    const triState1 = ["Brooklyn, NY", "Stamford, CT", "Buffalo, NY"];
    const cities2 = ["Reno, NV", "Cranford, NJ", "Dover, VT"];
    const triState2 = ["Cranford, NJ"];

    expect(triStateArea(cities1)).toEqual(triState1);
    expect(triStateArea(cities2)).toEqual(triState2);
  });

  it("is case-insensitive", () => {
    const cities1 = [
      "seattle, wa",
      "hartford, ct",
      "queens, ny",
      "syracuse, ny",
      "northampton, ma",
    ];

    const cities2 = [
      "bridgeport, ct",
      "portland, or",
      "newark, nj",
      "seattle, wa",
      "northampton, ma",
    ];

    const triState1 = ["hartford, ct", "queens, ny", "syracuse, ny"];
    const triState2 = ["bridgeport, ct", "newark, nj"];

    expect(triStateArea(cities1)).toEqual(triState1);
    expect(triStateArea(cities2)).toEqual(triState2);
  });

  it("only considers the last two characters when checking for state", () => {
    const cities1 = [
      "Brooklyn, NY",
      "Stamford, CT",
      "Acton, OH",
      "Buffalo, NY",
      "Spiny Toad, TX",
    ];

    const cities2 = ["Oranj, LA"];
    const triState1 = ["Brooklyn, NY", "Stamford, CT", "Buffalo, NY"];
    const triState2 = [];

    expect(triStateArea(cities1)).toEqual(triState1);
    expect(triStateArea(cities2)).toEqual(triState2);
  });
});

describe("uppercaseCount", () => {
  it(`returns a count of strings in the array that are entirely uppercased`, () => {
    const words1 = [
      "lorem",
      "IPSUM",
      "dolor",
      "SIT",
      "AMET",
      "CONSECTETUR",
      "adipiscing",
      "elit",
    ];

    const words2 = [
      "LOREM",
      "IPSUM",
      "dolor",
      "SIT",
      "amet",
      "CONSECTETUR",
      "adipiscing",
      "ELIT",
    ];

    expect(uppercaseCount(words1)).toBe(4);
    expect(uppercaseCount(words2)).toBe(5);
  });

  it(`does not count mixed case words`, () => {
    const words1 = [
      "Lorem",
      "IPSUM",
      "dOlor",
      "SIT",
      "AMeT",
      "CONSECTETUR",
      "adipiscing",
      "elit",
    ];

    const words2 = [
      "LOREM",
      "IpSUM",
      "dolor",
      "SIT",
      "amet",
      "CONsECTETUR",
      "ADIPISCING",
      "ELIT",
    ];
    expect(uppercaseCount(words1)).toBe(3);
    expect(uppercaseCount(words2)).toBe(4);
  });
});

describe("containsDigit", () => {
  it(`can determine that a string with only digits contains at least one digit`, () => {
    expect(containsDigit("1")).toBe(true);
    expect(containsDigit("31")).toBe(true);
    expect(containsDigit("315")).toBe(true);
    expect(containsDigit("1888")).toBe(true);
  });

  it(`can determine that a string with only non-numbers does not contain a digit`, () => {
    expect(containsDigit("ab")).toBe(false);
    expect(containsDigit("hello my weirdo")).toBe(false);
    expect(containsDigit("the quick brown fox begins a boring sentence")).toBe(
      false
    );
  });

  it(`can determine that a string that contains some numbers and some non-numbers does contain a digit`, () => {
    expect(containsDigit("ab3")).toBe(true);
    expect(containsDigit("35ab")).toBe(true);
    expect(containsDigit("35ab3")).toBe(true);
    expect(containsDigit("a3b")).toBe(true);
  });

  it(`can determine that an empty string does not contain a digit`, () => {
    expect(containsDigit("")).toBe(false);
  });
});

describe("containsLowerCase", () => {
  it(`can determine that a string with only lowercase characters contains at least one lowercase character`, () => {
    expect(containsLowerCase("a")).toBe(true);
    expect(containsLowerCase("ab")).toBe(true);
    expect(containsLowerCase("dki")).toBe(true);
    expect(containsLowerCase("weiorusd")).toBe(true);
  });

  it(`can determine that a string with only uppercase letters does not contain any lowercase characters`, () => {
    expect(containsLowerCase("AB")).toBe(false);
    expect(containsLowerCase("HELLO")).toBe(false);
    expect(containsLowerCase("WORDSAMIRITE")).toBe(false);
  });

  it(`can determine that a string with only non-letters does not contain any lowercase characters`, () => {
    expect(containsLowerCase("    ")).toBe(false);
    expect(containsLowerCase("!!!")).toBe(false);
    expect(containsLowerCase("2382930")).toBe(false);
  });

  it(`can determine that a string that contains some lowercase letters and some uppercase does contain a lowercase letter`, () => {
    expect(containsLowerCase("abC")).toBe(true);
    expect(containsLowerCase("KDab")).toBe(true);
    expect(containsLowerCase("KWJabWI")).toBe(true);
    expect(containsLowerCase("aBc")).toBe(true);
  });

  it(`can determine that a string that contains some lowercase letters and some non-letters does contain a lowercase letter`, () => {
    expect(containsLowerCase("hello my good friends")).toBe(true);
    expect(containsLowerCase("I hate this @#(%")).toBe(true);
    expect(containsLowerCase("what even is this")).toBe(true);
    expect(containsLowerCase("what!")).toBe(true);
  });

  it(`can determine that an empty string does not contain a lowercase letter`, () => {
    expect(containsLowerCase("")).toBe(false);
  });
});

describe("containsUpperCase", () => {
  it(`can determine that a string with only uppercase characters contains at least one uppercase character`, () => {
    expect(containsUpperCase("A")).toBe(true);
    expect(containsUpperCase("AB")).toBe(true);
    expect(containsUpperCase("DKI")).toBe(true);
    expect(containsUpperCase("WEIORUSD")).toBe(true);
  });

  it(`can determine that a string with only lowercase letters does not contain any uppercase characters`, () => {
    expect(containsUpperCase("ab")).toBe(false);
    expect(containsUpperCase("hello")).toBe(false);
    expect(containsUpperCase("wordsamirite")).toBe(false);
  });

  it(`can determine that a string with only non-letters does not contain any uppercase characters`, () => {
    expect(containsUpperCase("    ")).toBe(false);
    expect(containsUpperCase("!!!")).toBe(false);
    expect(containsUpperCase("2382930")).toBe(false);
  });

  it(`can determine that a string that contains some lowercase letters and some uppercase does contain an uppercase letter`, () => {
    expect(containsUpperCase("abC")).toBe(true);
    expect(containsUpperCase("KDab")).toBe(true);
    expect(containsUpperCase("KWJabWI")).toBe(true);
    expect(containsUpperCase("aBc")).toBe(true);
  });

  it(`can determine that a string that contains some uppercase letters and some non-letters does contain an uppercase letter`, () => {
    expect(containsUpperCase("hELLO MY GOOD FRIENDS")).toBe(true);
    expect(containsUpperCase("I HATE THIS @#(%")).toBe(true);
    expect(containsUpperCase("WHAT EVEN IS THIS")).toBe(true);
    expect(containsUpperCase("WHAT!")).toBe(true);
  });

  it(`can determine that an empty string does not contain an uppercase letter`, () => {
    expect(containsUpperCase("")).toBe(false);
  });
});

describe("containsNonAlphanumeric", () => {
  it(`can determine that a string with only non-alphanumeric characters contains at least one non-alphanumeric character`, () => {
    expect(containsNonAlphanumeric("#*(")).toBe(true);
    expect(containsNonAlphanumeric("   ")).toBe(true);
    expect(containsNonAlphanumeric("`??!`")).toBe(true);
  });

  it(`can determine that a string with only letters does not contain any non-alphanumeric characters`, () => {
    expect(containsNonAlphanumeric("ab")).toBe(false);
    expect(containsNonAlphanumeric("hello")).toBe(false);
    expect(containsNonAlphanumeric("HELLOYOU")).toBe(false);
  });

  it(`can determine that a string with only non-zero digits does not contain any non-alphanumeric characters`, () => {
    expect(containsNonAlphanumeric("3")).toBe(false);
    expect(containsNonAlphanumeric("33")).toBe(false);
    expect(containsNonAlphanumeric("238293")).toBe(false);
  });

  it(`can determine that a string with only zeros does not contain any non-alphanumeric characters`, () => {
    expect(containsNonAlphanumeric("0")).toBe(false);
    expect(containsNonAlphanumeric("00")).toBe(false);
    expect(containsNonAlphanumeric("0000")).toBe(false);
  });

  it(`can determine that a string that contains some alphanumeric characters and some non-alphanumeric characters does contain a non-alphanumeric character`, () => {
    expect(containsNonAlphanumeric("hello there")).toBe(true);
    expect(containsNonAlphanumeric("p@ssw03d")).toBe(true);
    expect(containsNonAlphanumeric("3249sdlfjks!230")).toBe(true);
    expect(containsNonAlphanumeric(" hi3 ")).toBe(true);
  });

  it(`can determine that an empty string does not contain a non-alphanumeric character`, () => {
    expect(containsNonAlphanumeric("")).toBe(false);
  });
});

describe("containsSpace", () => {
  it(`can determine that a string with only spaces contains at least one space`, () => {
    expect(containsSpace(" ")).toBe(true);
    expect(containsSpace("   ")).toBe(true);
    expect(containsSpace("        ")).toBe(true);
  });

  it(`can determine that a string with only letters does not contain any spaces`, () => {
    expect(containsSpace("ab")).toBe(false);
    expect(containsSpace("hello")).toBe(false);
    expect(containsSpace("HELLOYOU")).toBe(false);
  });

  it(`can determine that a string with only digits does not contain any non-alphanumeric characters`, () => {
    expect(containsSpace("3")).toBe(false);
    expect(containsSpace("33")).toBe(false);
    expect(containsSpace("2308293")).toBe(false);
  });

  it(`can determine that a string that contains some spaces and some non-spaces does contain a space`, () => {
    expect(containsSpace("hello there")).toBe(true);
    expect(containsSpace(" hi")).toBe(true);
    expect(containsSpace("hi ")).toBe(true);
    expect(containsSpace(" hi3 ")).toBe(true);
  });

  it(`can determine that an empty string does not contain any spaces`, () => {
    expect(containsSpace("")).toBe(false);
  });
});

describe("isValidPassword", () => {
  it(`returns false if there are no uppercase characters in the given string`, () => {
    expect(isValidPassword("jelly22fi$h")).toBe(false);
  });

  it(`returns false if there are no lowercase characters in the given string`, () => {
    expect(isValidPassword("JELLY22FI$H")).toBe(false);
  });

  it(`returns false if there are no digits in the given string`, () => {
    expect(isValidPassword("Usher!")).toBe(false);
  });

  it(`returns false if there are no non-alphanumeric characters in the given string`, () => {
    expect(isValidPassword("Passw0rd")).toBe(false);
  });

  it(`returns false if there are any spaces in the given string`, () => {
    expect(isValidPassword("Passw0rd #(@$")).toBe(false);
  });

  it(`returns true if it contains a lowercase letter, an uppercase letter, a digit, a non-alphanumeric character, and no spaces`, () => {
    expect(isValidPassword("Lov3MyP!ano")).toBe(true);
    expect(isValidPassword("1Ki77$")).toBe(true);
    expect(isValidPassword("a11Black$")).toBe(true);
    expect(isValidPassword("BankLogin!3")).toBe(true);
  });
});

describe("digits", () => {
  it(`can turn a positive number into an array of its digits`, () => {
    expect(digits(0)).toEqual([0]);
    expect(digits(1)).toEqual([1]);
    expect(digits(12)).toEqual([1, 2]);
    expect(digits(12350)).toEqual([1, 2, 3, 5, 0]);
  });

  it(`can turn a negative number into an array of its digits, ignoring the negative sign`, () => {
    expect(digits(-0)).toEqual([0]);
    expect(digits(-1)).toEqual([1]);
    expect(digits(-12)).toEqual([1, 2]);
    expect(digits(-12350)).toEqual([1, 2, 3, 5, 0]);
  });

  it(`can turn a floating point number into an array of its digits, ignoring the decimal point`, () => {
    expect(digits(3.1519)).toEqual([3, 1, 5, 1, 9]);
    expect(digits(4.04)).toEqual([4, 0, 4]);
  });
});

describe("getToBed", () => {
  it(`returns the original people but with everyone awake between 1am and 4am set to asleep`, () => {
    const people = [
      {
        name: "Colin",
        localTime: 730,
        asleep: false,
      },
      {
        name: "Alice",
        localTime: 130,
        asleep: false,
      },
      {
        name: "Evelyn",
        localTime: 200,
        asleep: true,
      },
      {
        name: "William",
        localTime: 330,
        asleep: false,
      },
      {
        name: "Ivy",
        localTime: 1450,
        asleep: true,
      },
    ];

    const asleep = [
      {
        name: "Colin",
        localTime: 730,
        asleep: false,
      },
      {
        name: "Alice",
        localTime: 130,
        asleep: true,
      },
      {
        name: "Evelyn",
        localTime: 200,
        asleep: true,
      },
      {
        name: "William",
        localTime: 330,
        asleep: true,
      },
      {
        name: "Ivy",
        localTime: 1450,
        asleep: true,
      },
    ];

    expect(getToBed(people)).toEqual(asleep);
  });

  it(`is inclusive`, () => {
    const people = [
      {
        name: "Colin",
        localTime: 730,
        asleep: false,
      },
      {
        name: "Alice",
        localTime: 100,
        asleep: false,
      },
      {
        name: "Evelyn",
        localTime: 200,
        asleep: true,
      },
      {
        name: "William",
        localTime: 400,
        asleep: false,
      },
      {
        name: "Ivy",
        localTime: 1450,
        asleep: true,
      },
    ];

    const asleep = [
      {
        name: "Colin",
        localTime: 730,
        asleep: false,
      },
      {
        name: "Alice",
        localTime: 100,
        asleep: true,
      },
      {
        name: "Evelyn",
        localTime: 200,
        asleep: true,
      },
      {
        name: "William",
        localTime: 400,
        asleep: true,
      },
      {
        name: "Ivy",
        localTime: 1450,
        asleep: true,
      },
    ];

    expect(getToBed(people)).toEqual(asleep);
  });

  it(`doesn't mutate the original array`, () => {
    const originalPeople = [
      {
        name: "Colin",
        localTime: 730,
        asleep: false,
      },
      {
        name: "Alice",
        localTime: 100,
        asleep: false,
      },
      {
        name: "Evelyn",
        localTime: 200,
        asleep: true,
      },
      {
        name: "William",
        localTime: 400,
        asleep: false,
      },
      {
        name: "Ivy",
        localTime: 1450,
        asleep: true,
      },
    ];

    const people = [
      {
        name: "Colin",
        localTime: 730,
        asleep: false,
      },
      {
        name: "Alice",
        localTime: 100,
        asleep: false,
      },
      {
        name: "Evelyn",
        localTime: 200,
        asleep: true,
      },
      {
        name: "William",
        localTime: 400,
        asleep: false,
      },
      {
        name: "Ivy",
        localTime: 1450,
        asleep: true,
      },
    ];

    getToBed(people);
    expect(people).toEqual(originalPeople);
  });
});
