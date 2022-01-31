
import { getData } from "./getData.js"
import { inyector } from "./inyector.js"
import {search} from "./buscador.js"
const input = document.getElementById("buscador")
const root =document.getElementById("root")
const searchButton = document.getElementById("buscar")
const titulo = document.getElementById("titulo")
const index = "https://api.giphy.com/v1/gifs/trending?api_key=rLfKclTD5GkLpmA3a2Ivv3ziwwNMouQz&limit=25&rating=g" 
const inicio= async(busqueda)=>{
        const data = await getData(index)
        data.map(item =>{
            inyector(item)
            console.log(item.title)
        })
        input.addEventListener("input", async()=>{
            if(input.value.length >= 3){
                const filtro = input.value[0].toUpperCase() + input.value.slice(1)
                let search = data.filter(item => item.title.includes(filtro))
                root.innerHTML = ""
                titulo.innerHTML = `<h2>Resultados para ${filtro}: ${search.length} en total</h2>`
                search.map(item=>{ root.innerHTML += `<img src="${item.images.fixed_height.url}"/>`})
            }else{
                console.log("insuficiente")
            }
        })
    
}
inicio()
searchButton.addEventListener("click", async()=>{
    search()
})