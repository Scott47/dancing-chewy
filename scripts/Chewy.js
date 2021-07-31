

export const Chewy = (gifObject) => {
    return `<div class="chewy--${gifObject.id}"><img src="${gifObject.media[0].tinygif.url}"/></div>`
}


