import Joi from '@hapi/joi';

export default Joi.object({
  "phone": Joi.string().min(10).max(10).required(),
  "password": Joi.string().min(10).required(),
});