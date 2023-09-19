import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json()
   // console.log(data)
    const user = await prisma.academicDetails.create({data: data})
    console.log(user)
    return NextResponse.json({data: user}, {status: 200})
}