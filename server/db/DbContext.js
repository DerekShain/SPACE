import mongoose from 'mongoose'
import { GalaxiesSchema } from '../models/Galaxies.js'
import { MoonsSchema } from '../models/Moons.js'
import { PlanetsSchema } from '../models/Planets.js'
import { SpeciesSchema } from '../models/Species.js'
import { StarsSchema } from '../models/Stars.js'

class DbContext {
  Galaxies = mongoose.model('Galaxies', GalaxiesSchema)
  Stars = mongoose.model('Stars', StarsSchema)
  Planets = mongoose.model('Planets', PlanetsSchema)
  Moons = mongoose.model('Moons', MoonsSchema)
  Species = mongoose.model('Species', SpeciesSchema)
}

export const dbContext = new DbContext()
