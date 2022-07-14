const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoTripuladasSchema = new Schema(
  {
    nombre: {
      type: String
    },
    categoria: {
      type: String
    },
    tipoDeCombustible: {
      type: String
    },
    nivelDeCombustible: {
      type: Number
    },
    mision: {
      type: String
    },
    pesoEnKg: {
      type: Number
    },
    estado: {
      type: String
    },
    fotos: {
      type: [String]
    },
    image_id: {
      type: mongoose.Types.ObjectId
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('noTripuladas', NoTripuladasSchema);