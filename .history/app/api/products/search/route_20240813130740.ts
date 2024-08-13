import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    console.log(req.nextUrlsea);
    return NextResponse.json({ ok: true });
}