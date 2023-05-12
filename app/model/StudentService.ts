
import { db } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';


export async function getAllStudent(){
  const client = await db.connect(); 
  const { rows: students } = await client.sql`SELECT * FROM student ;`;
  return students;
}
export async function addStudent(name: any, email: any) {
  const client = await db.connect();
  await client.sql`INSERT INTO Student (name, email) VALUES (${name}, ${email})`
  
}