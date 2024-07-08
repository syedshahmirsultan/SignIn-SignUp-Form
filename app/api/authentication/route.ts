import { db, userDataTable } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";



//For SignIn Component
export async function PUT(req: NextRequest) {
    const { username, useremail, password } = await req.json();

    if (username && useremail && password) {
        const result = await db
            .select()
            .from(userDataTable)
            .where(
                and(
                    eq(userDataTable.username, username),
                    eq(userDataTable.useremail, useremail),
                    eq(userDataTable.password, password)
                )
            );

        if (result.length > 0) {
            return NextResponse.json({ message: "Successfully" });
        } else {
            return NextResponse.json({ message: "User Not Found!" }, { status: 404 });
        }
    } else {
        return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }
}


//For SignUp Component
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, useremail, password } = body;

    const alreadyUserData = await db
      .select()
      .from(userDataTable)
      .where(
        and(
          eq(userDataTable.username, username),
          eq(userDataTable.useremail, useremail),
          eq(userDataTable.password, password)
        )
      );

    if (alreadyUserData.length > 0) {
      return NextResponse.json({ message: 'Already Exists' });
    }

    const userData = {
      username: username,
      useremail: useremail,
      password: password,
    };

    await db.insert(userDataTable).values(userData);

    return NextResponse.json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
