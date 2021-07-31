import { tenorBaseUrl, apiKey } from "../.Settings.js"

const database = {
    dancetypes: [],
    chewygifs: [],
    moods: [
        {
            id: 1,
            mood: "annoyed"
        },
        {
            id: 2,
            mood: "upset"
        },
        {
            id: 3,
            mood: "chill"
        },
        {
            id: 4,
            mood: "weird"
        },
        {
            id: 5,
            mood: "party"
        },
        {
            id: 6,
            mood: "frustrated"
        },
        {
            id: 7,
            mood: "singing"
        },
        {
            id: 8,
            mood: "joyful"
        },
        {
            id: 9,
            mood: "cold"
        },
        {
            id: 10,
            mood: "dance"
        }

    ]
}

export const fetchChewyGifs = () => {
    return fetch(`${tenorBaseUrl}?q=chewbacca&key=${apiKey}&limit=48`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(res => res.json())
    .then(r => database.chewygifs = r.results)
    .catch((error) => console.log("error:", error))
}

export const getChewyGifs = () => {
    return database.chewygifs.map(chewy => ({...chewy}))
}

export const getMoods = () => {
    return database.moods.map(mood => ({...mood}))
}