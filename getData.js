const getData = async(texto)=>{
    const peticion = await fetch(texto)
    const data = await peticion.json()
    return data.data
}
export {getData}