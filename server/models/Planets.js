import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const PlanetsSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { title: String },
    starsId: { type: ObjectId, ref: 'Stars', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
PlanetsSchema.virtual('rock', {
  localField: 'planetsId',
  foreignField: '_id',
  justOne: true
})
