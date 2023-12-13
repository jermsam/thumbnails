// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  thumbnailsDataValidator,
  thumbnailsPatchValidator,
  thumbnailsQueryValidator,
  thumbnailsResolver,
  thumbnailsExternalResolver,
  thumbnailsDataResolver,
  thumbnailsPatchResolver,
  thumbnailsQueryResolver
} from './thumbnails.schema.js'
import { ThumbnailsService, getOptions } from './thumbnails.class.js'

export const thumbnailsPath = 'thumbnails'
export const thumbnailsMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './thumbnails.class.js'
export * from './thumbnails.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const thumbnails = (app) => {
  // Register our service on the Feathers application
  app.use(thumbnailsPath, new ThumbnailsService(app, getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: thumbnailsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(thumbnailsPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(thumbnailsExternalResolver),
        schemaHooks.resolveResult(thumbnailsResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(thumbnailsQueryValidator),
        schemaHooks.resolveQuery(thumbnailsQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(thumbnailsDataValidator),
        schemaHooks.resolveData(thumbnailsDataResolver)
      ],
      patch: [
        schemaHooks.validateData(thumbnailsPatchValidator),
        schemaHooks.resolveData(thumbnailsPatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
