import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

(async () => {

    const purchases = await prisma.purchases.findMany({
        where: {
            
        },
    });

    console.log(purchases);

})()