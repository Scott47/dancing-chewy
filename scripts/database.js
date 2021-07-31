import { tenorBaseUrl, apiKey } from "../.Settings.js"

const database = {
    dancetypes: [],
    chewygifs: []
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