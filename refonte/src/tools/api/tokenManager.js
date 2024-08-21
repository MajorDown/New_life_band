const jwt = require("jsonwebtoken");
const UserModel = require("@/data/models/user.model");

// GENERER LE TOKEN JWT
const tokenMaker = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  return token;
};

// VERIFIER LE TOKEN JWT
const tokenChecker = async (token) => {
  try {
    if (!token) {
      throw new Error("tokenChecker ~> utilisateur non authentifié !");
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;
    const userToCheck = await UserModel.findById(userId);
    if (!userToCheck) {
      throw new Error("tokenChecker ~> Utilisateur introuvable");
    }
    console.log("tokenChecker ~> requète autorisé");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = { tokenMaker, tokenChecker };
