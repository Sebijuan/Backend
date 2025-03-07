import Joi from"joi";

const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

export const validateCar = validate(
    Joi.object({
        brand: Joi.string().required(),
        model: Joi.string().required(),
        year: Joi.number().required(),
        kms: Joi.number().required(),
    })
);
