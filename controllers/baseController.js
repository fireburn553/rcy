// baseController.js
const baseController = {};

baseController.buildLogin = async function(req, res){
    res.render("index", {title: "HOME", loggedIn: false});
};

module.exports = baseController