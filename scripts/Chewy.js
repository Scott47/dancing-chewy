import { getChewyGifs } from "./database.js";

export const Chewy = () => {
    const chewbaccaGifs = getChewyGifs()
    const gif = chewbaccaGifs.map(chewyGif => `<div class="chewy--${chewyGif.id}"><img src="${chewyGif.media[0].tinygif.url}"/></div>`)
    return gif.join("")
}
