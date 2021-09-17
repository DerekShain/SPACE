import { starsService } from '../services/StarsService.js'
import BaseController from '../utils/BaseController'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAll)
      .post('', this.createStars)
      .put('/:starsId', this.editStars)
      .delete('/:starsId', this.removeStars)
  }

  async getAll(req, res, next) {
    try {
      const stars = await starsService.getStars(req.query)
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async createStars(req, res, next) {
    try {
      const stars = await starsService.createStars(req.body)
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async editStars(req, res, next) {
    try {
      const stars = await starsService.createStars(req.body)
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async removeStars(req, res, next) {
    try {
      const stars = await starsService.removeStars(req.params.starsId)
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }
}
