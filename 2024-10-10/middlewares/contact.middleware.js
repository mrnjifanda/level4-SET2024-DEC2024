const create = (request, response, next) => {

    const { name, phone, email } = request.body
    if (!name || !phone || !email) {
        response.status(400).json({
            error: true,
            message: 'Name, phone, and email are required'
        });

        return ;
    }

    next();
};

const sort = (request, response, next) => {
    const { key, order } = request.query;
    if (!key) {
        response.status(400).json({
            error: true,
            message: 'Please provide a key to sort'
        });
        return ;
    }

    if (order && (order != 'asc' && order != 'desc')) {
        response.status(400).json({
            error: true,
            message: 'order must be asc or desc'
        });
        return ;
    }

    request.query.order = order ?? 'asc';
    next();
}

module.exports = { create, sort };
