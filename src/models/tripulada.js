const mongoose = require('mongoose');
const { Schema } = mongoose;

const TripuladasSchema = new Schema(
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
    image_id: {
      type: mongoose.Types.ObjectId
    },
    equipo: {
      type: [mongoose.Types.ObjectId]
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('tripuladas', TripuladasSchema);