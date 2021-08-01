import { Chewy } from "./Chewy.js"
import { MoodSelector } from "./MoodSelector.js"
import { getChewyGifs } from "./database.js"

const mainContainer = document.querySelector("#container")

export const ChewyHTML = (stringOfHTML, currentMood) => {
    if (stringOfHTML) {
        return `
        <h1><img alt="dancing-chewy" src="images/dancing_chewy1.gif" />Welcome to Dancing Chewy!<img alt="dancing-chewy" src="images/dancing_chewy1.gif" /></h1>
        <section class="chewygif">
            <div>${MoodSelector(currentMood)}</div>
                <h2>ChewyGifs</h2>
                ${stringOfHTML}
            </section>
        `
    } else {
       return  `
       <h1><img alt="dancing-chewy" src="images/dancing_chewy1.gif" />Welcome to Dancing Chewy!<img alt="dancing-chewy" src="images/dancing_chewy1.gif" /></h1>
            <section class="chewygif">
            <div>${MoodSelector(currentMood)}</div>
                <p>No mood selected</P>
                <div class="embed-responsive embed-responsive-16by9">
                <iframe width="853" height="480" src="https://www.youtube.com/embed/CEC84P6SMhQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
            </section>
        `

    }
}

mainContainer.addEventListener("moodChanged", evt => {
    const chewbaccaGifs = getChewyGifs()
    const foundGif = chewbaccaGifs.find(gif => {
        if (gif.itemurl.includes(evt.detail.chosenMood)) {
            return gif
        } else {
            console.log("sorry sucka")
        }
    })
    let htmlString = Chewy(foundGif)
    mainContainer.innerHTML = ChewyHTML(htmlString, evt.detail.chosenMood)
})

{/* <iframe width="853" height="480" src="https://www.youtube.com/embed/5n7y1Kwg2Qw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}