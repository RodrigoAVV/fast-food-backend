const admin = require('firebase-admin')

const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()
const queryCarrito = db.collection('carrito')
const queryProductos = db.collection('productos')

module.exports = {
    queryCarrito,
    queryProductos
}