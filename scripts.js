let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    
    // Pegar image externa
async function getExternalImage() {
    const response = await fetch 
    ('https://source.unsplash.com/random')

    document.querySelector('.image')
    .innerHTML = `<img src ="${response.url}" >`
}
getExternalImage()
    // clicar no botão, pegar imagem externa
document.querySelector('button').onclick = function() {
    getExternalImage()
}
    // clicar na imagem
document.querySelector('.image').onclick = function() {
    const imageContainer =  document.querySelector('.image')
    
    const imageSource =  document.querySelector('.image img').src


    //se está no local Storage, remover
    const index =  favorites.indexOf(imageSource)
    const existsLocalStorage = index != -1
    if (existsLocalStorage){
        favorites.splice(index, 1)
        imageContainer.classList.remove('fav')
    } else {
        favorites.push(imageSource)
        imageContainer.classList.add('fav')
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))

}