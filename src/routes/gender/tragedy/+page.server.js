import { prisma } from "$lib/server/prisma"
import moment from "moment/moment";

const load = async() => {
    moment.locale("pt-br");
    let tragedy;
    try {
        tragedy = await prisma.tragedy.findMany({orderBy: { date: "asc"}});
        tragedy.forEach((item) => {
            const dataMoment = moment(new Date(item.date).toISOString().split("T")[0]);
            const dataPorExtenso = dataMoment.format("LL");
            item.date = dataPorExtenso;
        });
    } catch (err) {
        console.error(err);
    }

    return { tragedy }
}

export { load }