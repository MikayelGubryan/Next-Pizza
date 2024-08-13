import { prisma } from "./prisma-client";

async function up() {
    
    await prisma.user.createMany({
        data: [
         {
            name: "John Doe",
            email: "5N5r5@example.com",
            emailVerified: new Date(),
            image: "https://i.pravatar.cc/300?u=5N5r5@example.com"
            
         },
         {}
        ]
    })
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