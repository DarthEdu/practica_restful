const pedidoModel={
    async getPedidoById(pedidoId) {
        const response = await fetch(`http://localhost:4000/pedido/${pedidoId}`);
        if (!response.ok) {
            return {error:"Pedido no encontrado"}
        }else{
            const data = await response.json()
            return data
        }
    },
    async createPedidoModel (newPedido) {
        const url = "http://localhost:4000/pedido"
        console.log(newPedido);
        const peticion = await fetch(url,{
            method:'POST',
            body: JSON.stringify(newPedido),
            headers: {'Content-Type':'application/json'}
        })
        const data = await peticion.json()
        return data
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

export default pedidoModel