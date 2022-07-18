import Joi from 'joi'
import joiObjectid from 'joi-objectid'

Joi.objectId = joiObjectid(Joi)

export const createPostSchema = Joi.object({
  text: Joi.string().required().max(256)
})

export const deletePostSchema = Joi.objectId({
  id: Joi.objectId().required()
})