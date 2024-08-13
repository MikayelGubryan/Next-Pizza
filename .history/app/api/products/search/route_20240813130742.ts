import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    console.log(req.nextUrlsearchParams);
    return NextResponse.json({ ok: true });
}