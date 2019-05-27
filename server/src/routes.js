const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const FoodController = require('./controllers/FoodController')
const FoodControllerPolicy = require('./policies/FoodControllerPolicy')
const LogController = require('./controllers/LogController')

module.exports = (app) => {
    app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login', AuthenticationController.login)

    app.post('/search', FoodController.search)

    app.get('/foods', FoodController.getFoods)

    app.post('/newFood',
    FoodControllerPolicy.createNewFood,
    FoodController.createNewFood)

    app.post('/addLog', LogController.addLog)

    app.post('/retrieveLog', LogController.retrieveLog)

    app.delete('/clearData/:userId', LogController.clearData)

    app.get('/foods/:foodId', FoodController.getFoodDetails)
}
// calls authenitication to login, which grabs user name & password using body.
