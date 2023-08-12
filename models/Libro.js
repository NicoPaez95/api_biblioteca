const mongoose = require('mongoose');

// Configurar la opción para prepararte para el cambio en Mongoose 7
mongoose.set('strictQuery', false); // Puedes establecerlo en true si prefieres

// Conectar a la base de datos
mongoose.connect("mongodb://127.0.0.1:27017/biblioteca", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const LibroSchema = new mongoose.Schema({
titulo: String,
autor: String
}, { collection: 'libros' });
const Libro = mongoose.model('Libro', LibroSchema);
module.exports = Libro;