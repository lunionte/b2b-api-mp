import Joi from "joi";

export const newUserSchema = Joi.object().keys({
    name: Joi.string()
        .min(2)
        .max(30)
        .pattern(/^[a-zA-Z\s]+$/)
        .trim()
        .optional(),
    email: Joi.string().email().trim().required(),
    password: Joi.string().min(8).max(30).trim().required(),
});

export const loginSchema = Joi.object().keys({
    email: Joi.string().email().trim().required(),
    password: Joi.string().min(8).max(30).trim().required(),
});
