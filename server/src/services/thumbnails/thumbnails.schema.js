// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const thumbnailsSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Thumbnails', additionalProperties: false }
)
export const thumbnailsValidator = getValidator(thumbnailsSchema, dataValidator)
export const thumbnailsResolver = resolve({})

export const thumbnailsExternalResolver = resolve({})

// Schema for creating new entries
export const thumbnailsDataSchema = Type.Pick(thumbnailsSchema, ['text'], {
  $id: 'ThumbnailsData'
})
export const thumbnailsDataValidator = getValidator(thumbnailsDataSchema, dataValidator)
export const thumbnailsDataResolver = resolve({})

// Schema for updating existing entries
export const thumbnailsPatchSchema = Type.Partial(thumbnailsSchema, {
  $id: 'ThumbnailsPatch'
})
export const thumbnailsPatchValidator = getValidator(thumbnailsPatchSchema, dataValidator)
export const thumbnailsPatchResolver = resolve({})

// Schema for allowed query properties
export const thumbnailsQueryProperties = Type.Pick(thumbnailsSchema, ['id', 'text'])
export const thumbnailsQuerySchema = Type.Intersect(
  [
    querySyntax(thumbnailsQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const thumbnailsQueryValidator = getValidator(thumbnailsQuerySchema, queryValidator)
export const thumbnailsQueryResolver = resolve({})
