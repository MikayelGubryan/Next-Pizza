import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const query = reqne.get('query'));
    return NextResponse.json({ ok: true });
}