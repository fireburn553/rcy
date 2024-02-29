const Util = {}
const councilModel = require("../models/council-model")
/* ****************************************
 * Middleware For Handling Errors
 * Wrap other function in this for 
 * General Error Handling
 **************************************** */
Util.handleErrors = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)


Util.getCategory = async function(req, res, next) {
    let category = await councilModel.getCategory();
    return category.rows; // Return the array directly, not an HTML list
};

module.exports = Util