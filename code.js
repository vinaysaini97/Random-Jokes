const jokecontainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,explicit&type=single";


btn.addEventListener("click",() =>{
    async function getjoke(){
        const res = await fetch(url);
        const data = await res.json();
        const joke = data.joke;
        jokecontainer.innerHTML = joke;
    }
    getjoke();
})
