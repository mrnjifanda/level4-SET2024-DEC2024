const welcome =  (request, response) => {
    response.json({
        message: "Welcome to my Contact Manager API"
    })
}

const aboutUs = (request, response) => {
    response.json({
        message: "This is About us page"
    });
}

module.exports = { welcome, aboutUs };