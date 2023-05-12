import { addStudent, getAllStudent } from "@/app/model/StudentService";
import { NextResponse } from "next/server";

export async function GET() {
    //const client = await db.connect(); 
    //const {rows} = await client.sql`SELECT * FROM Student ;`;
    // const {rows}  = await sql`SELECT * FROM Student ;`;
    const studentes = await getAllStudent()
    return NextResponse.json(studentes);
  
  }
  export async function POST(
    request: Request
  ) {
    const body = await request.json();
    console.log(body)
    //const client = await db.connect(); 
    //const {rows} = await client.sql`INSERT INTO Student (name, email) VALUES (${body.name}, ${body.email})`
    addStudent(body.name, body.email)
    return NextResponse.json({ success: "ok" });
  }
  