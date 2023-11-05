const checkValidation = (email, password) => {
  const isEmailValid = /^[\w]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Check your Email Address";

  if (!isPasswordValid)
    return "Use atleast 8 character,One uppercase one lowercase letter and one number";

  return null;
};

export default checkValidation;
