import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET() {
    const data = await prisma.academicDetails.findMany({
        include: {
            address: true,
            course: true,
            education: true
        }
    })
    return NextResponse.json({data: data}, {status: 200})
}