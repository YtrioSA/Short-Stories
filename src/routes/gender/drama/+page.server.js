import { prisma } from "$lib/server/prisma"
import moment from "moment/moment";

const load = async() => {
    moment.locale("pt-br");
    let drama;
    try {
        drama = await prisma.drama.findMany({orderBy: { date: "asc"}});
        drama.forEach((item) => {
            const dataMoment = moment(new Date(item.date).toISOString().split("T")[0]);
            const dataPorExtenso = dataMoment.format("LL");
            item.date = dataPorExtenso;
        });
    } catch (err) {
        console.error(err);
    }

    return { drama }
}

export { load }