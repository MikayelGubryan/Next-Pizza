import { Ingrid_Darling } from "next/font/google";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { categories, ingredients, products } from "./constants";

const randomDecimalNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;   
}

const generateProductItem = ({
    productId,
    pizzaType,
    size,
} : {
    productId : number;
    pizzaType : number;
    size : number;
}) => {
    return {
        productId,
        pizzaType,
        size,
        price: randomDecimalNumber(190, 600)
    } as Prisma ProductItemUncheckedCreateInput;
}

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
        data: categories
    });

    await prisma.ingredient.createMany({
        data: ingredients
    });

    await prisma.product.createMany({
        data: products
    });

    const pizza1 = await prisma.product.create({
        data: {
            name: "Pizza Margherita",
            categoryId: 1,
            image: "/public/pizzaMargherita.png",
            ingredients: {
                connect: ingredients.slice(0, 5),
            }
        }
    });

    const pizza2 = await prisma.product.create({
        data: {
            name: "Pizza Margherita",
            categoryId: 1,
            image: "/public/pizzaMargherita.png",
            ingredients: {
                connect: ingredients.slice(5, 10),
            }
        }
    });

    const pizza3 = await prisma.product.create({
        data: {
            name: "Pizza Margherita",
            categoryId: 1,
            image: "/public/pizzaMargherita.png",
            ingredients: {
                connect: ingredients.slice(10, 40),
            }
        }
    });

    await prisma.productItem.createMany({
        data: [
            {
                productId: pizza1.id,
                price: 300,
                pizzaType: 2,
                size: 30,
            },
            {
                productId: pizza1.id,
                price: 300,
                pizzaType: 2,
                 size: 30,
            }

        ]
    })

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