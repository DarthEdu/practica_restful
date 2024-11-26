

const UserModel={

    async getUserById(userId) {
        const response = await fetch(`http://localhost:4000/cliente/${userId}`);
        if (!response.ok) {
            return {error:"Usuario no encontrado"}
        }else{
            const data = await response.json()
            return data
        }
    },

    async createClienteModel (newCliente) {
        const url = "http://localhost:4000/cliente"
        console.log(newCliente);
        const peticion = await fetch(url,{
            method:'POST',
            body: JSON.stringify(newCliente),
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
    }


}


export default UserModel
