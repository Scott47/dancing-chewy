import { getChewyGifs } from "./database.js";

export const Chewy = () => {
    const chewbaccaGifs = getChewyGifs()
    console.log(chewbaccaGifs)
}
