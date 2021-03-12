const validate_email = (email) => {
  var error_msg = "";
  if (email.length < 1) {
    error_msg = "Email address is required field";
  } else if (
    !email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    error_msg = "You have entered an invalid email address";
  } else {
    error_msg = "";
  }
  return error_msg;
};

const validate_phone = (mobile) => {
  var error_msg = "";

  var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (mobile.length < 1) {
    error_msg = "Mobile number is required field";
  } else if (!mobile.match(phone)) {
    error_msg = "You have entered an invalid phone number.";
  } else {
    error_msg = "";
  }
  return error_msg;
};

export const validator = (name, value) => {
  if (value.length < 1) {
    return "This is required field";
  }

  switch (name) {
    case "username":
      return value.length < 3
        ? "Username must be more than 3 characters long!"
        : "";
    case "password":
      return value.length < 6 ? "Password must be 6 characters long!" : "";
    case "firstName":
      return value.length < 3
        ? "Name must be more than 3 characters long!"
        : "";
    case "lastName":
      return value.length < 3
        ? "Name must be more than 3 characters long!"
        : "";
    case "mobile":
      return validate_phone(value);
    case "email":
      return validate_email(value);

    default:
      break;
  }
};

export const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
