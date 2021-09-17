import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const SpeciesSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { title: String },
    moonsId: { type: ObjectId, ref: 'Moons', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
