export const emailValidation = (value) => {
    return value && value.lastIndexOf("@") !== -1 && value.indexOf("@") !== -1 && value.lastIndexOf("@") === value.indexOf("@");
}

export const passwordValidation = (value) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[^\s]).{8,}$/;
    return passwordRegex.test(value);
  };
  