import { dbContext } from '../db/DbContext'

class GalaxiesService {
  async getGalaxiesById(galaxiesId) {
    const galaxy = await dbContext.Galaxies.findById(galaxiesId).populate(
      'system',
      'name picture'
    )
    return galaxy
  }

  async createGalaxies(galaxiesData) {
    const galaxies = await dbContext.Galaxies.create(galaxiesData)
    await galaxies.populate(['system', 'name picture'])
    return galaxies
  }

  async getGalaxies(query) {
    const galaxies = await dbContext.Galaxies.find(query).populate(
      'system',
      'name picture'
    )
    return galaxies
  }

  async editGalaxies(galaxiesData) {
    const galaxies = await this.getGalaxiesById(galaxiesData)
    galaxies.name = galaxiesData.name || galaxies.name
    galaxies.description = galaxiesData.description || galaxies.description
    await galaxies.remove()
    return galaxies
  }

  async removeGalaxies(galaxiesId) {
    const galaxies = await this.getGalaxiesById(galaxiesId)
    await galaxies.remove()
    return galaxies
  }

  async getStars(galaxiesId) {
    const stars = await dbContext.Stars.find({ galaxiesId })
    return stars
  }
}

export const galaxiesService = new GalaxiesService()
