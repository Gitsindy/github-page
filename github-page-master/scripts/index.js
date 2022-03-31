import { getInfoUser } from "../helpers/getUsers.js"
import { ShowCard } from "../modules/showCard.js"
let contenedorTarjetas = document.getElementById('container-Cards');
let contenedorTarjetasl =document.getElementById('container-Cardsl')


document.addEventListener('DOMContentLoaded', async () => {
    let userInfoFetch = await Promise.all(getInfoUser())
    .then( res => res)

    ShowCard(userInfoFetch, contenedorTarjetas);
})


document.addEventListener('click', (e) => {
    
    if(e.target.classList.contains('link')){
        localStorage.setItem('user', e.target.id)
    }
})

document.addEventListener('DOMContentLoaded', async () => {
    let userInfoFetch = await Promise.all(getInfoUser())
    .then( res => res)

    ShowCard(userInfoFetch, contenedorTarjetasl);
})


document.addEventListener('click', (e) => {
    
    if(e.target.classList.contains('link')){
        localStorage.setItem('user', e.target.id)
    }
})

