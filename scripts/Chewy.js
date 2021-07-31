import { ChewyHTML } from "./ChewyHTML.js";
import { getChewyGifs } from "./database.js";

// export const Chewy = () => {
//     const chewbaccaGifs = getChewyGifs()
//     console.log(chewbaccaGifs)
//     const gif = chewbaccaGifs.map(chewyGif => `<div class="chewy--${chewyGif.id}"><img src="${chewyGif.media[0].tinygif.url}"/></div>`)
//     return gif.join("")
// }
export const Chewy = (gifObject) => {
    console.log(gifObject.media[0].tinygif.url)
    return `<div class="chewy--${gifObject.id}"><img src="${gifObject.media[0].tinygif.url}"/></div>`
}


