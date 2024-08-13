import { NextResponse } from "next/server";

export async function GET(req: Next) {
    console.log(req);
    return NextResponse.json({ ok: true });
}