import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StarsSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { title: String },
    galaxiesId: { type: Schema.Types.ObjectId }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
StarsSchema.virtual('stars', {
  localField: 'starsId',
  foreignField: '_id',
  justOne: true
})
