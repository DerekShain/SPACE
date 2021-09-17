import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const MoonsSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { title: String },
    planetsId: { type: ObjectId, ref: 'Planets', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
