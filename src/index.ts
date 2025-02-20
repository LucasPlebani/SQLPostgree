import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

(async () => {

    const purchases = await prisma.purchases.findMany({
        where: {
            
        },
    });

})();

(async () => {

    const sessions = await prisma.sessions.findMany({
        where: {

        },
    });
    console.log(sessions);
})();
