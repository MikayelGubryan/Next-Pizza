import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    console.log(req.nextUrlsearchParams.get('query'));
    return NextResponse.json({ ok: true });
}