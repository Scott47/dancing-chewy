import { tenorBaseUrl, apiKey } from "../.Settings.js"

const database = {
    dancetypes: [],
    chewygifs: [],
    moods: [
        {
            id: 1,
            mood: "giddy"
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
            mood: "extra"
        },
        {
            id: 5,
            mood: "demure"
        },
        {
            id: 6,
            mood: "frustrated"
        },
        {
            id: 7,
            mood: "happy"
        },
        {
            id: 8,
            mood: "obstinate"
        },
        {
            id: 9,
            mood: "superfly"
        },
        {
            id: 10,
            mood: "determined"
        }

    ]
}

export const fetchChewyGifs = () => {
    return fetch(`${tenorBaseUrl}?q=chewbacca&key=${apiKey}&limit=24`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(res => res.json())
    .then(r => database.chewygifs = r.results)
}

export const getChewyGifs = () => {
    return database.chewygifs.map(chewy => ({...chewy}))
}

export const getMoods = () => {
    return database.moods.map(mood => ({...mood}))
}