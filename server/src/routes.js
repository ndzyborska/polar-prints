const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const FoodController = require('./controllers/foodController')

module.exports = (app) => {
    app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login',
    AuthenticationController.login)

    app.get('/food',
    FoodController.items)


    app.get('/food/:name',
    FoodController.search)

    app.post('/food',
    FoodController.post)
}
// calls authenitication to login, which grabs user name & password using body.