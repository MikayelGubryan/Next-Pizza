export async function GET() {
    const ingredients = await prisma.ingredient.findMany();