import bcrypt from "bcrypt";

const passwordCrypter = async (password) => {
  const salt = await bcrypt.genSalt(Number(process.env.HASH_TURNS));
  const hashedPassword = bcrypt.hash(password, salt);
  return hashedPassword;
};

const passwordChecker = async (password, hashedpassword) => {
  const isPasswordValid = await bcrypt.compare(password, hashedpassword);
  return isPasswordValid;
};

module.exports = { passwordCrypter, passwordChecker };
