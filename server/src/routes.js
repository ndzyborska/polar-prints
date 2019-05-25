const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const FoodController = require('./controllers/foodController')

module.exports = (app) => {
    app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login',
    AuthenticationController.login)

    app.search('/food/:name',
    FoodController.search)

    app.post('/food',
    FoodController.post)

    app.post('/search-food',
    FoodController.food)
}
// calls authenitication to login, which grabs user name & password using body.