import { getMoods } from "./database.js"

const mainContainer = document.querySelector("#container")
let currentSelectedMood = "0"

export const MoodSelector = (moodString) => {
    const allMoods = getMoods()
    let moodHTML = `<select class='moods' name="${moodString}"><option value="0">Select a mood...</option>`
    const moodOptions = allMoods.map(mood => {
       if (mood.mood === moodString){
        return `<option value="${mood.mood}" selected>${mood.mood}</option>`
       } else {
        return `<option value="${mood.mood}">${mood.mood}</option>`
       }
    })
    moodHTML += moodOptions
    moodHTML += "</select>"
    return moodHTML
}

document.addEventListener("change", moodChangeEvent => {
    currentSelectedMood = moodChangeEvent.target.value
    console.log(currentSelectedMood)
    if (moodChangeEvent.target.value !== "0") {
        const broadcastMoodChange = new CustomEvent("moodChanged", {
            detail: {
                chosenMood: moodChangeEvent.target.value
            }
        }
        )
        mainContainer.dispatchEvent(broadcastMoodChange)
    }
})

