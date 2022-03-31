import { getRepoInfo } from "../helpers/getInfo.js";
import { showRepoInfo } from "../modules/showRepoInfo.js";
let contenedorRepos = document.getElementById('contenedor-repositorios');
let luisRepo =document.getElementById(' conten-repositorios');
let saraRepo = document.getElementById('contensara-repositorios');


document.addEventListener('DOMContentLoaded', async () => {
         let userName = localStorage.getItem('user');

         let repos = await getRepoInfo(`https://api.github.com/users/${userName}/repos`)
         .then(res => res)

       showRepoInfo(repos, contenedorRepos);
})

document.addEventListener('DOMContentLoaded', async () => {
  let userName = localStorage.getItem('user');

  let repost = await getRepoInfo(`https://api.github.com/users/${userName}/repos`)
  .then(res => res)

showRepoInfo(repost, luisRepo);
})

document.addEventListener('DOMContentLoaded', async () => {
  let userName = localStorage.getItem('user');

  let reposts = await getRepoInfo(`https://api.github.com/users/${userName}/repos`)
  .then(res => res)

showRepoInfo(reposts, saraRepo);
})
