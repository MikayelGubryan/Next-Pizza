import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server"

export async function GET() {
    const users = await prisma.user.findMany();

    return NextResponse.json({users});
}

export async function POST(req: NextRequest) {
    const body = await prisma.user.create({data: {name: "John Doe"}});
    return NextResponse.json({user});
}

 