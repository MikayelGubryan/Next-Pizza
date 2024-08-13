import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

async function up() {
    
    await prisma.user.createMany({
        data: [
         {
            fullName: "User User",
            email: "5N5r5@example.com",
            password: hashSync("111111", 10),
            verified: new Date(), 
            role: "USER"
         },
         {
            fullName: "Admin Admin",
            email: "wewe231d@example.com",
            password: hashSync("111111", 10),
            verified: new Date(), 
            role: "ADMIN"
         }
        ]
    });

    await prisma.category.createMany({
        data: [
         {
            name: "Pizza",
         },
         {
            name: "Burger",
         }
        ]
    });

    await prisma.ingredient.createMany({
        data: [
          {
            name: 'Pizza',
            price: 10,
            imageUrl: "https://i.pravatar.cc/300?u=5N5r5@example.com",
          },
          {
            name: "Burger",
            price: 5,
            imageUrl: "https://i.pravatar.cc/300?u=wewe231d@example.com",
          },
        ],
      }.map((obj,index) => ({...obj, id: index + 1}))

    await prisma.product.createMany({
        data: [
         {
            name: "Pizza",
            imageUrl: "https://i.pravatar.cc/300?u=5N5r5@example.com",
            categoryId: 1
         },
         {
            name: "Burger",
            imageUrl: "https://i.pravatar.cc/300?u=wewe231d@example.com",
            categoryId: 1
        }
        ].map((obj,index) => ({...obj, id: index + 1})),
    });
} 

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e)
    }
}

main().then (async () => {
    await prisma.$disconnect();
}) .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})