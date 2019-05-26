const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const FoodController = require('./controllers/foodController')

module.exports = (app) => {
    app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login',
    AuthenticationController.login)

    app.post('/search',
    FoodController.search)

    app.get('/foods',
    FoodController.getFoods)

    app.post('/newFood',
    FoodController.createNewFood)

   app.get('/foods/:foodId',
   FoodController.getFoodDetails)
}
// calls authenitication to login, which grabs user name & password using body.