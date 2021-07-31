import { Chewy } from "./Chewy.js"
import { MoodSelector } from "./MoodSelector.js"

export const ChewyHTML = () => {
    return `
        <section class="chewgif">
        <div>${MoodSelector()}</div>
            <h2>ChewyGifs</h2>
            ${Chewy()}
        </section>
    `
}
