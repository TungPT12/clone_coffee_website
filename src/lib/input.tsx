const isEmptyInput = (input: any) => {
  if (input.trim()) {
    return true;
  }
  return false;
};
const isZeroInput = (input: any) => {
  input = parseFloat(input);
  if (input > 0) {
    return true;
  }
  return false;
};
const isZeroInputInt = (input: any) => {
  input = parseInt(input);
  if (input > 0) {
    return true;
  }
  return false;
};

const isShowWarning = (isValid: any, isTouch: any) => {
  if (isTouch) {
    if (isValid === false) {
      return true;
    }
  }
  return false;
};

const isEmptySelect = (input: any) => {
  if (input !== "none" || input === "") {
    return true;
  }
  return false;
};

const validatedEmail = (input: string) => {
  let pattern = /^[a-zA-z0-9]+@([a-z]+\.)+[\w-]{2,4}$/;
  if (input.trim()) {
    let result = pattern.test(input);
    return result;
  }
  return false;
};

const validPassword = (input: string) => {
  if (input.trim().length >= 8) {
    return true;
  }
  return false;
};

const validatePhoneNumber = (phone: string) => {
  const pattern = /^\d{10,11}$/;
  const isPhone = pattern.test(phone);
  if (isPhone) {
    return true;
  }
  return false;
};

const validateVisa = (cardNumber: any) => {
  const pattern = /^\d{16}$/;
  const isCardNumber = pattern.test(cardNumber);
  if (isCardNumber) {
    const numbers = cardNumber.split("").map((number: any, index: any) => {
      if (index % 2 === 0) {
        number = parseInt(number);
        if (number * 2 > 9) {
          const numberThan9s = (number * 2)
            .toString()
            .split("")
            .map((numberThan9) => {
              return parseInt(numberThan9);
            });
          return numberThan9s.reduce((sum, numberThan9) => {
            return sum + numberThan9;
          }, 0);
        }
        return number * 2;
      }
      return parseInt(number);
    });
    console.log(numbers);
    const sumNumberCard = numbers.reduce((sum: number, number: number) => {
      console.log(sum + " + " + number);
      return sum + number;
    }, 0);
    console.log(sumNumberCard);
    if (sumNumberCard % 10 === 0) {
      return true;
    }
  }
  return false;
};

export {
  isEmptyInput,
  isShowWarning,
  isEmptySelect,
  isZeroInput,
  isZeroInputInt,
  validatedEmail,
  validatePhoneNumber,
  validPassword,
  validateVisa,
};
