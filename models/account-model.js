const pool = require("../database/")

/* ***************************
 *  Get all account data
 * ************************** */

async function getAccounts(){
    return await pool.query("SELECT * FROM public.user u JOIN public.account acc ON u.user_id = acc.user_user_id JOIN public.barangay_has_user bhu ON bhu.user_user_id = u.user_id JOIN barangay b ON b.barangay_id = bhu.barangay_barangay_id JOIN municipality mun ON mun.municipality_id = b.municipality_municipality_id JOIN province pro ON pro.province_id = mun.province_province_id JOIN region r ON r.region_id = pro.region_region_id")
}


module.exports = {getAccounts}