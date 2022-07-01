// import fs from "fs/promises";
// export const get = async () => {
//     const allDrops: { drop: string; ext: string; path: string; }[] = []
//     const response = await fs
//         .readdir("/qdrop-images")
//         .then((filenames) => {
//             for (let filename of filenames) {
//                 allDrops.push({
//                     drop: filename.split(".")[0],
//                     ext: filename.split(".")[1],
//                     path: `/qdrop-images/${filename}`,
//                 });
//                 // console.log(filename);
//             }
//             const drops = response
//             console.log(drops);
//         })
//         // If promise is rejected
//         .catch((err) => {
//             console.log(err);
//         });

//     return {
//         body: {
//             drops
//         }
//     }
// };