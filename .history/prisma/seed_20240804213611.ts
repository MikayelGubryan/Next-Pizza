async function up() {
    
    await prisma.user.create({data: {
        name: 'John Doe',
        email: 'j9qQy@example.com',
        

} 

async function down() {
    
}

async function main() {
    try {
        await down();
        await up();
    }catch (e) {
        console.error(e)
    }
}