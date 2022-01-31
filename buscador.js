import { getData } from "./getData.js"
import { inyector } from "./inyector.js"
const input = document.getElementById("buscador")

const search = async()=>{
const valor = input.value
const url = `https://api.giphy.com/v1/gifs/search?api_key=rLfKclTD5GkLpmA3a2Ivv3ziwwNMouQz&q=${valor}&limit=25&offset=0&rating=g&lang=en`
const data = await getData(url)
root.innerHTML= ""
data.map(item =>{
    inyector(item)
})
}
export {search}