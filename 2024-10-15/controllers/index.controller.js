const welcome =  (request, response) => {
    response.json({
        message: "Welcome to my Contact Manager API"
    })
}

module.exports = { welcome };
