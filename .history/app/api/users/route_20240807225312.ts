import { prisma } from "@/prisma/prisma-client";
import { NextResponse, NextRequest } from "next/server"

export async function GET() {
    const users = await prisma.user.findMany();

    return NextResponse.json({users});
}

export async function POST(req: NextRequest) {
    const data = await req.json();

    const user = await prisma.user.create({
        body
    })

    return NextResponse.json({user});
}

 