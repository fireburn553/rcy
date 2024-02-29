const express = require("express")
const router = new express.Router() 
const accountController = require("../controllers/accountController") 
const utilities = require("../utilities/")

router.get("/register", utilities.handleErrors(accountController.buildCategory))
router.get("/register/:category_id", utilities.handleErrors(accountController.buildCouncil))
router.get("/register/council/:council_id", utilities.handleErrors(accountController.buildRegistrationForm))
module.exports = router;