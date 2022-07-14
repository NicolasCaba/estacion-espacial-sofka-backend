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

TripuladasSchema.statics.findAllData = function () {
  const joinData = this.aggregate([
    {
      $lookup: {
        from: 'storages',
        localField: 'image_id',
        foreignField: '_id',
        as: 'image',
      },
    },
    {
      $unwind: '$image'
    },
    // fields
    {
      $project: {
        '__v': 0,
        'createdAt': 0,
        'updatedAt': 0,
        'image': {
          '__v': 0,
          'createdAt': 0,
          'updatedAt': 0,
        }
      }
    }
  ]);
  return joinData;
}

TripuladasSchema.statics.findOneDataById = function (id) {
  const joinData = this.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(id)
      },
    },
    {
      $lookup: {
        from: 'storages',
        localField: 'image_id',
        foreignField: '_id',
        as: 'image',
      },
    },
    {
      $unwind: '$image'
    },
    // fields
    {
      $project: {
        '__v': 0,
        'createdAt': 0,
        'updatedAt': 0,
        'image': {
          '__v': 0,
          'createdAt': 0,
          'updatedAt': 0,
        }
      }
    }
  ]);
  return joinData;
}

TripuladasSchema.statics.findAllDataByName = function (nameRegEx) {
  const joinData = this.aggregate([
    {
      $match: {
        nombre: { $regex: nameRegEx, $options: 'i' }
      }
    },
    {
      $lookup: {
        from: 'storages',
        localField: 'image_id',
        foreignField: '_id',
        as: 'image',
      },
    },
    {
      $unwind: '$image'
    },
    // fields
    {
      $project: {
        '__v': 0,
        'createdAt': 0,
        'updatedAt': 0,
        'image': {
          '__v': 0,
          'createdAt': 0,
          'updatedAt': 0,
        }
      }
    }
  ]);
  return joinData;
}



module.exports = mongoose.model('tripuladas', TripuladasSchema);