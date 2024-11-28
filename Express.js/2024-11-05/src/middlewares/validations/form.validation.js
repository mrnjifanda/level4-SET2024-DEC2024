const Joi = require('joi');

const validForm = (req, res, next) => {

    const schema = Joi.object({
        username: Joi.string().min(3).max(10).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).required(),
        confirm_password: Joi.ref('password')
    });

    const { value, error } = schema.validate(req.body);
    if (error) {

        const result = error.details.map(detail => ({
            field: detail.path[0],
            message: detail.message
        }));

        return res.status(400).json({
            error: true,
            message: 'Invalid data in form',
            data: result
        })
    }

    next(); 
};

module.exports = { validForm };
