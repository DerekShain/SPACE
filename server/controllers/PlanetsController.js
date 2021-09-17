import { planetsService } from '../services/PlanetsService.js'
import BaseController from '../utils/BaseController'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAll)
      .post('', this.createPlanets)
      .put('/:planetsId', this.editPlanets)
      .delete('/:planetsId', this.removePlanets)
  }

  async getAll(req, res, next) {
    try {
      const planets = await planetsService.getPlanets(req.query)
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async createPlanets(req, res, next) {
    try {
      const planets = await planetsService.createPlanets(req.body)
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async editPlanets(req, res, next) {
    try {
      const planets = await planetsService.createPlanets(req.body)
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async removePlanets(req, res, next) {
    try {
      const planets = await planetsService.removePlanets(req.params.planetsId)
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }
}
