import prisma from '../lib/utils/prisma'
// import { dropStore } from '../lib/stores/decoderStore';

export const get = async () => {
    const drops = await prisma.drop.findMany({
        orderBy: {
            dropnumber: 'desc'
        }
    })
    console.log(drops);
    // dropStore.set([drops])

    return {
        body: {
            drops
        }
    }
}
