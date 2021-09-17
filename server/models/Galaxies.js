import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const GalaxiesSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

GalaxiesSchema.virtual('galaxies', {
  localField: 'galaxiesId',
  foreignField: '_id',
  justOne: true
})
