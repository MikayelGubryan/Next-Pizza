import { NextResponse } from "next/server"

export async function GET() {
    const users = await prisma.$
    return NextResponse.json({
        name: 'John Doe',
    });
}

 