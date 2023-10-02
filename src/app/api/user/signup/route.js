import { NextResponse } from "next/server";
import { connectToDB } from "@/data/connectToDB";
import UserModel from "@/data/models/user.model";
import { passwordCrypter } from "@/tools/api/passwordManager";

export const POST = async (request) => {
  const { userId, password, email } = await request.json();
  console.log(
    "api/user/signup ~> Tentative d'inscription via l'adresse mail :",
    email
  );
  try {
    await connectToDB();
    // VERIFICATION SI L'UTILISATEUR EXISTE DEJA
    const existingUser = await UserModel.findOne({
      email: email,
    });
    if (existingUser) {
      return NextResponse.json("Cet utilisateur existe déjà", { status: 400 });
    }
    // CRYPTAGE DU MOT DE PASSE
    const hashedpassword = await passwordCrypter(password);
    // CREATION DE L'UTILISATEUR
    const newUser = new UserModel({
      userId: userId,
      password: hashedpassword,
      email: email,
    });
    // SAUVEGARDE DE L'UTILISATEUR
    await newUser.save();
    console.log("api/user/signup ~> nouvel utilisateur créé :", userId);
    // RENVOI DE L'UTILISATEUR
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    // SI ERREUR
    console.log("api/user/signup ~> error :", error);
    return NextResponse.json("failed to signup", { status: 500 });
  }
};
