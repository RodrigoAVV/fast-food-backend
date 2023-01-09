class ContenedorCarFirebase{
    constructor(queryCar){
        this.queryCar = queryCar
    }

    async getAllProductos(){
        try {
            //console.log(this.queryProductos)
            const productosDocs = await this.queryProductos.get()
            let docs = productosDocs.docs.map((doc) => ({
                id:doc.id,
                ...doc.data(),
                success:true
            }))
            if(docs){
                return{
                    success: true,
                    data: docs
                }
            }else{
                return{
                    success: false,
                    data: 'No se encuentra producto'
                }
            }
        } catch (err) {
            return{
                success:false,
                message:err.message
            }
        }
        
    }

}

module.exports = ContenedorCarFirebase