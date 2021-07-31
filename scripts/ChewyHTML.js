import { Chewy } from "./Chewy.js"
import { MoodSelector } from "./MoodSelector.js"
import { getChewyGifs } from "./database.js"

const mainContainer = document.querySelector("#container")

export const ChewyHTML = (stringOfHTML) => {
    if (stringOfHTML) {
        return `
            <section class="chewygif">
            <div>${MoodSelector()}</div>
                <h2>ChewyGifs</h2>
                ${stringOfHTML}
            </section>
        `
    } else {
       return  `
            <section class="chewygif">
            <div>${MoodSelector()}</div>
                <h2>ChewyGifs</h2>
                <p>No mood selected</P>
            </section>
        `

    }
}
mainContainer.addEventListener("moodChanged", evt => {
    console.log(evt.detail)
    const chewbaccaGifs = getChewyGifs()
    const foundGif = chewbaccaGifs.find(gif => {

        if (gif.itemurl.includes(evt.detail.chosenMood)) {
            return gif
        } else {
            console.log("sorry sucka")
        }
    })
    let htmlString = Chewy(foundGif)
    mainContainer.innerHTML = ChewyHTML(htmlString)
})