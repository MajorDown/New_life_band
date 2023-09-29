import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { userId, password } = await req.json();
  try {
    console.log("api/user/login ~> Tentative de connection en cours :", userId);
    const user = { userId: "majordown", token: 1234567890 };
    console.log("api/user/login ~> Connection établie :", userId);
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.log("api/user/login ~> error :", error);
    return NextResponse.json("failed to login", { status: 500 });
  }
};
