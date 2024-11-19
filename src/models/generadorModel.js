const GeneradorModel = {

    async getAllGeneradorModel() {
        const peticion = await fetch("http://localhost:4000/generador")
        const generador = await peticion.json()
        console.log(generador);
        return generador
    },

    async getUserById(userId) {
        const response = await fetch(`http://localhost:4000/cliente/${userId}`);
        if (!response.ok) {
            return {error:"Usuario no encontrado"}
        }else{
            const data = await response.json()
            return data
        }
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

    async getPedidoById(pedidoId) {
        const response = await fetch(`http://localhost:4000/pedido/${pedidoId}`);
        if (!response.ok) {
            return {error:"Pedido no encontrado"}
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

    async updateUserModel (userId, updatedUser) {

        const url = `http://localhost:4000/cliente/${userId}`
        const response = await fetch(url)
        if (!response.ok) {
            return {error:"Usuario no encontrado"}
        }
        else{
            const peticion = await fetch(url,{
                method:'PUT',
                body:JSON.stringify(updatedUser),
                headers:{'Content-Type':'application/json'}
            })
            const data = await peticion.json()
            return data
        }
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
    async updatePedidoModel (pedidoId, updatedPedido) {

        const url = `http://localhost:4000/pedido/${pedidoId}`
        const response = await fetch(url)
        if (!response.ok) {
            return {error:"Pedido no encontrado"}
        }
        else{
            const peticion = await fetch(url,{
                method:'PUT',
                body:JSON.stringify(updatedPedido),
                headers:{'Content-Type':'application/json'}
            })
            const data = await peticion.json()
            return data
        }
    },

    async deleteUserID (userId) {
        const url = `http://localhost:4000/cliente/${userId}`
        const response = await fetch(url)
        if (!response.ok) {
            return {error:"Usuario no encontrado"}
        }
        else{
            const peticion = await fetch(url,{
                method:'DELETE',
            })
            await peticion.json()
            return {msg:"Usuario eliminado correctamente"}
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
    },

    async deletePedidoID (pedId) {
        const url = `http://localhost:4000/pedido/${pedId}`
        const response = await fetch(url)
        if (!response.ok) {
            return {error:"Pedido no encontrado"}
        }
        else{
            const peticion = await fetch(url,{
                method:'DELETE',
            })
            await peticion.json()
            return {msg:"Pedido eliminado correctamente"}
        }
    }
}



export default GeneradorModel