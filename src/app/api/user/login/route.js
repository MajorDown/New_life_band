import { NextResponse } from "next/server";
const UserModel = require("@/data/models/user.model");
import { tokenMaker } from "@/tools/api/tokenManager";
import { passwordChecker } from "@/tools/api/passwordManager";

export const POST = async (request) => {
  const { userId, password } = await request.json();
  console.log("api/user/login ~> Tentative de connection en cours :", userId);
  try {
    // RECHERCHE DU USERID DANS LA DB
    const userToCheck = await UserModel.findById(userId);
    if (!userToCheck) {
      console.log("api/user/login ~> Erreur de userId");
      return NextResponse.json("user / password incorrect", { status: 400 });
    }
    // VALIDATION DU PASSWORD
    const isPasswordValid = passwordChecker(password, userToCheck.password);
    if (!isPasswordValid) {
      console.log("api/user/login ~> Erreur de password");
      return NextResponse.json("user / password incorrect", { status: 400 });
    }
    // RENVOI DU USER VALIDE
    const token = tokenMaker(userId);
    const connectedUser = { userId: "majordown", token: token };
    return NextResponse.json(connectedUser, { status: 201 });
  } catch (error) {
    console.log("api/user/login ~> error :", error);
    return NextResponse.json("failed to login", { status: 500 });
  }
};
