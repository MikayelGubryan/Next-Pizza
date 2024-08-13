export async function GET() {
    const ingredients = await prisma.ingredient.findMany();
    return NextResponse.json(ingredients);  
}