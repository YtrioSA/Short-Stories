import { prisma } from "$lib/server/prisma";

const load = async () => {
    let gender;
    try {
        gender = await prisma.gender.findMany();
    } catch (err) {
        console.error(err);
    }

    return { gender };
};

export { load };
