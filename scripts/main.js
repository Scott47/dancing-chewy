import { fetchChewyGifs } from "./database.js";
import { ChewyHTML } from "./ChewyHTML.js";

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    fetchChewyGifs().then(() => {
        mainContainer.innerHTML = ChewyHTML()
    })
}

renderHTML()