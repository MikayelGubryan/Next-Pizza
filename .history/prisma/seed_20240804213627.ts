import { prisma } from "./prisma-client";

async function up() {
    
    await prisma.user.create({data: {
        name: 'John Doe',
        email: 'j9qQy@example.com',
        emailVerified: new Date(),
        image: 'https://i.pravatar.cc/300?u=j9qQy@example.com'
    }})

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