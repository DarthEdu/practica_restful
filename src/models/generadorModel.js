

const GeneradorModel = {

    async getAllGeneradorModel() {
        const peticion = await fetch("http://localhost:4000/generador")
        const generador = await peticion.json()
        console.log(generador);
        return generador
    },

    async getGeneradorById(genId) {
        const response = await fetch(`http://localhost:4000/generador/${genId}`);
        if (!response.ok) {
            return {error:"Generador no encontrado"}
        }else{
            const data = await response.json()
            return data
        }
    },

    
    async createGeneradorModel (newGenerador) {
        const url = "http://localhost:4000/generador"
        console.log(newGenerador);
        const peticion = await fetch(url,{
            method:'POST',
            body: JSON.stringify(newGenerador),
            headers: {'Content-Type':'application/json'}
        })
        const data = await peticion.json()
        return data
    },


    async updaGeneradorModel (generadorId, updatedGenerador) {

        const url = `http://localhost:4000/generador/${generadorId}`
        const response = await fetch(url)
        if (!response.ok) {
            return {error:"Generador no encontrado"}
        }
        else{
            const peticion = await fetch(url,{
                method:'PUT',
                body:JSON.stringify(updatedGenerador),
                headers:{'Content-Type':'application/json'}
            })
            const data = await peticion.json()
            return data
        }
    },


    async deleteGeneradorID (genId) {
        const url = `http://localhost:4000/generador/${genId}`
        const response = await fetch(url)
        if (!response.ok) {
            return {error:"Generador no encontrado"}
        }
        else{
            const peticion = await fetch(url,{
                method:'DELETE',
            })
            await peticion.json()
            return {msg:"Generador eliminado correctamente"}
        }
    }
}


export default GeneradorModel