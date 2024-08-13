import { prisma } from "./prisma-client";

async function up() {
    
    await prisma.user.createMany({
        data: [
         {
            fullName: "John Doe",
            email: "5N5r5@example.com",
            password: hashSync("111111", 10),
            verified: new Date(), 
            role: "USER"
         },
         {
            fullName: "John Flak",
            email: "5N5r5@example.com",
            password: hashSync("111111", 10),
            verified: new Date(), 
            role: "USER"
         }
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