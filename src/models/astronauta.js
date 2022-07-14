const mongoose = require('mongoose');
const { Schema } = mongoose;

const AstronautaSchema = new Schema(
  {
    nombre: {
      type: String
    },
    edad: {
      type: Number
    },
    cargo: {
      type: String
    },
    estado: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('astronautas', AstronautaSchema);