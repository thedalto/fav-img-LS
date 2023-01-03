//VARIABLES
let favorites = JSON.parse(localStorage.getItem('favorites')) || []
const imageContainer =  document.querySelector('.image')
const button  = document.querySelector('button')

// events
button.onclick = () => uptadeImage()
imageContainer.onclick = () => updateAll()
   
// METHODOS
function getState(){
    const imageSource =  document.querySelector('.image img').src
    
    const index =  favorites.indexOf(imageSource)
    const existsLocalStorage = index != -1

    return { imageSource, index, existsLocalStorage }
}

function updateAll() {
    uptadeFavorites()
    updateClasses()
}

function uptadeFavorites() {
    const { existsLocalStorage, index, imageSource } = getState()

    existsLocalStorage 
    ?  favorites.splice(index, 1) 
    : favorites.push(imageSource) 

    localStorage.setItem('favorites', JSON.stringify(favorites))
}

function updateClasses() {
    const {existsLocalStorage} = getState()

    imageContainer.classList.remove('fav')

    if (existsLocalStorage){
       imageContainer.classList.add('fav')
    }

}
    
async function uptadeImage() {
    await getExternalImage()
    updateClasses()
    
}
    async function getExternalImage() {
        const response = await fetch 
        ('https://source.unsplash.com/random')
    
        imageContainer
        .innerHTML = `<img src ="${response.url}" >`
    }
    getExternalImage()

  
    