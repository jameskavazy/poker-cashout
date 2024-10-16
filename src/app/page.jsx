import HomeSessionless from '../components/home/HomeSessionless';
import prisma from '../lib/db';
import { auth } from '../lib/auth';
import { redirect } from "next/navigation";
import HomeSessionfull from '../components/home/HomeSessionfull';
// import { useRouter } from "next/navigation";
// import { HomeSessionless } from "@/components/home/HomeSessionless"

export default async function Home() {

  const session = await auth();
  console.log("The Session is ", session);

  if (session && !session?.user?.username) {
    redirect("/profile")
  }
 
 
  return (
    session == null ? <HomeSessionless/> : <HomeSessionfull/>
  )
  
  
}