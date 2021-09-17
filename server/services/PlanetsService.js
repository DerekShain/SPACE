import { dbContext } from '../db/DbContext'

class PlanetsService {
  async getPlanetsById(planetsId) {
    const planet = await dbContext.Planets.findById(planetsId).populate('twinkle', 'name picture')
    return planet
  }

  async createPlanets(planetsData) {
    const planets = await dbContext.Planets.create(planetsData)
    await planets.populate(['twinkle', 'name picture'])
    return planets
  }

  async getPlanets(query) {
    const planets = await dbContext.Planets.find(query).populate('twinkle', 'name picture')
    return planets
  }

  async editPlanets(planetsData) {
    const planets = await this.getPlanetsById(planetsData)
    planets.name = planetsData.name || planets.name
    planets.description = planetsData.description || planets.description
    await planets.remove()
    return planets
  }

  async removePlanets(planetsId) {
    const planets = await this.getPlanetsById(planetsId)
    await planets.remove()
    return planets
  }
}

export const planetsService = new PlanetsService()
