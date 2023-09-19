import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json()
    const user = await prisma.academicDetails.create({data: data})
    return NextResponse.json({data: user}, {status: 200})
}