import { prisma } from "@/prisma/prisma-client";
import { NextResponse, NextRequest } from "next/server"

export async function GET() {
    const users = await prisma.user.findMany();

    return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        if (!data.fullName || !data.email || !data.password || !data.verified) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Create user in the database
        const user = await prisma.user.create({
            data: {
                ...data,
                verified: new Date() // Set to current date/time or provide a specific date
            }
        });

        return NextResponse.json(user);
    } catch (error) {
        const errorMessage = (error as Error).message; // Type assertion
        console.error('Error creating user:', errorMessage);
        return NextResponse.json({ error: 'Failed to create user', details: errorMessage }, { status: 500 });
    }
}

 