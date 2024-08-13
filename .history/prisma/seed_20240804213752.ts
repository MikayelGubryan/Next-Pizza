import { prisma } from "./prisma-client";

async function up() {
    
    await prisma.user.createMany({
        data: [
         {},
         {}
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