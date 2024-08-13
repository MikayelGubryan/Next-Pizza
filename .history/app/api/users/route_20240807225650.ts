import { prisma } from "@/prisma/prisma-client";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        // Optional: Add basic validation
        if (!data.fullName || !data.email || !data.password) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Create user in the database
        const user = await prisma.user.create({
            data
        });

        return NextResponse.json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }
}
