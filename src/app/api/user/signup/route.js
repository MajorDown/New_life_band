import { NextResponse } from "next/server";

export const POST = async (request) => {
  console.log("kikou");
  const { userId, password, email } = await request.json();
  try {
    console.log("api/user/login ~> Tentative d'inscription en cours :", userId);
    const user = { userId: "majordown", token: 1234567890 };
    console.log("api/user/login ~> inscription effectué :", userId);
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.log("api/user/login ~> error :", error);
    return NextResponse.json("failed to signup", { status: 500 });
  }
};
