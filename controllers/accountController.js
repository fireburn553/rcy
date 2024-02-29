const councilModel = require("../models/council-model")
const util = require("../utilities/")

const accountController = {};


accountController.buildCategory = async function(req, res){
    let category= await util.getCategory()
    res.render("./council/category-reg.ejs", {
        title:"Create Account", 
        loggedIn:false,
        category: category
    })
}

accountController.buildCouncil = async function(req, res){
    const category_id = req.params.category_id
    const data = await councilModel.getCouncilByCategoryId(category_id)
    res.render("./council/council", {
        title:"Choose Council", 
        loggedIn:false,
        council: data
    })
}

accountController.buildRegistrationForm = async function(req, res){
    const council_id = req.params.council_id
    res.render("./account/register", {
        title:"Register Account",
        loggedIn: false,
        council_id
    })
}


module.exports = accountController