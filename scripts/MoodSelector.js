import { getMoods } from "./database.js"

export const MoodSelector = () => {
    const allMoods = getMoods()
    let moodHTML = "<select class='moods'><option value='0'>Select a mood...</option>"
    const moodOptions = allMoods.map(mood => `<option value="${mood.id}">${mood.mood}</option>`)
    moodHTML += moodOptions
    moodHTML += "</select>"
    return moodHTML
}