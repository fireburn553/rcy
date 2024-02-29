const accountController = {};

accountController.buildRegistration = async function(req, res){
    res.render("./account/register", {title:"Registration", loggedIn:false},)
}

module.exports = accountController