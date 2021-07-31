import { getMoods } from "./database.js"

const mainContainer = document.querySelector("#container")

export const MoodSelector = () => {
    const allMoods = getMoods()
    let moodHTML = "<select class='moods'><option value='0'>Select a mood...</option>"
    const moodOptions = allMoods.map(mood => `<option value="${mood.mood}">${mood.mood}</option>`)
    moodHTML += moodOptions
    moodHTML += "</select>"
    return moodHTML
}

document.addEventListener("change", moodChangeEvent => {
    if (moodChangeEvent.target.value !== '0') {
        const broadcastMoodChange = new CustomEvent("moodChanged",  {
            detail: {
                chosenMood: moodChangeEvent.target.value
            }
        }
        )
        mainContainer.dispatchEvent(broadcastMoodChange)
    }
})

