import { db, userDataTable } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

//For SignIn Component

export async function GET(req:NextRequest){
const url = req.nextUrl.searchParams;

if(url.has('username') && url.has('useremail') && url.has('password')){
    const {username}:any = url.get('username');
    const {useremail}:any = url.get('useremail');
    const {password}:any = url.get('password');

  await db.select().from(userDataTable).where(and(eq(userDataTable.username,username),
eq(userDataTable.useremail, useremail),
eq(userDataTable.password, password)));

return NextResponse.json({message:"Successfully"})
}

else {
    return "User Not Found !"
}

}


//For SignUp Component
export  async function POST(req:NextRequest){
 const body = req.nextUrl.searchParams;
 const {username}:any = body.get('username');
    const {useremail}:any = body.get('useremail');
    const {password}:any = body.get('password');

 const alreadyUserData = await db.select().from(userDataTable).where(and(
    eq(userDataTable.username,username),
    eq(userDataTable.useremail,useremail),
    eq(userDataTable.password,password)))
 
const userData = {
    username:username,
    useremail:useremail,
    password:password
}
    if(alreadyUserData.length >0){
        return "Already Exists"
    }

    await db.insert(userDataTable).values(userData);
}