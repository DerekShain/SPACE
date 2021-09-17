import { galaxiesService } from '../services/GalaxiesService.js'
import BaseController from '../utils/BaseController'

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAll)
      .get('/:galaxiesId/stars', this.getStars)
      .post('', this.createGalaxies)
      .put('/:galaxiesId', this.editGalaxies)
      .delete('/:galaxiesId', this.removeGalaxies)
  }

  async getAll(req, res, next) {
    try {
      const galaxies = await galaxiesService.getGalaxies(req.query)
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async createGalaxies(req, res, next) {
    try {
      req.body.galaxiesId = req.params.galaxiesId
      const galaxies = await galaxiesService.createGalaxies(req.body)
      res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async editGalaxies(req, res, next) {
    try {
      const galaxies = await galaxiesService.createGalaxies(req.body)
      res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async removeGalaxies(req, res, next) {
    try {
      const galaxies = await galaxiesService.removeGalaxies(
        req.params.galaxiesId
      )
      res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async getStars(req, res, next) {
    try {
      const stars = await galaxiesService.getStars(req.params.galaxiesId)
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }
}
