import { getAllStudent } from "@/app/model/StudentService";
import { NextResponse } from "next/server";

export async function GET() {
    //const client = await db.connect(); 
    //const {rows} = await client.sql`SELECT * FROM Student ;`;
    // const {rows}  = await sql`SELECT * FROM Student ;`;
    const studentes = await getAllStudent()
    return NextResponse.json(studentes);
  
  }