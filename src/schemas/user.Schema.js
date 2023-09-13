import Joi from 'joi';

export const userSignUp = Joi.object({
    email: Joi.string()
        .required()
        .email({
            minDomainSegments: 2
        })
        .messages({
            'any.required': 'Email is required'
        }),
    password: Joi.string()
        .required()
        .min(8)
        .max(35)
        .alphanum(),
    name: Joi.string()
        .min(2)
        .max(50),
    // .regex(Solo caracteres alfabeticos),
    image: Joi.string()
        .required()
        .uri()
})