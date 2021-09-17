import { dbContext } from '../db/DbContext'

class StarsService {
  async getStarsById(starsId) {
    const star = await dbContext.Stars.findById(starsId).populate(
      'twinkle',
      'name picture'
    )
    return star
  }

  async createStars(starsData) {
    const stars = await dbContext.Stars.create(starsData)
    await stars.populate(['twinkle', 'name picture'])
    return stars
  }

  async getStars(query) {
    const stars = await dbContext.Stars.find(query).populate(
      'twinkle',
      'name picture'
    )
    return stars
  }

  async editStars(starsData) {
    const stars = await this.getStarsById(starsData)
    stars.name = starsData.name || stars.name
    stars.description = starsData.description || stars.description
    await stars.remove()
    return stars
  }

  async removeStars(starsId) {
    const stars = await this.getStarsById(starsId)
    await stars.remove()
    return stars
  }
}

export const starsService = new StarsService()
