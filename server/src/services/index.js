import { thumbnails } from './thumbnails/thumbnails.js'

export const services = (app) => {
  app.configure(thumbnails)

  // All services will be registered here
}
