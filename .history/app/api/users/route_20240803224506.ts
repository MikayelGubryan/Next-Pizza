import { NextResponse } from "next/server"

export async function GET() {
    const users = await prisma.user
    return NextResponse.json({
        name: 'John Doe',
    });
}

 