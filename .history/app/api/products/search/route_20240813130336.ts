export async function GET(req: Request) {
    console.log(req);
    return NextResponse.json({ ok: true });
}