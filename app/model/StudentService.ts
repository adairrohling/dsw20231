
import { db } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';


export async function getAllStudent(){
  const client = await db.connect(); 
  const { rows: students } = await client.sql`SELECT * FROM student ;`;
  //console.log(rows)
  //return JSON.stringify(rows)
  
  return students;
}