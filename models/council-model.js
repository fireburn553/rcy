const pool = require("../database/")

const councilModel = {}

councilModel.getCategory = async function(){
    try {
        return await pool.query("SELECT * FROM category")
    } catch (error) {
        return error.message
    }
}

councilModel.getCouncilByCategoryId = async function(category_id){
    try{
        const data = await pool.query(`SELECT * FROM public.council co JOIN category ca ON co.category_category_id = ca.category_id JOIN school_community sc ON sc.school_community_id = co.school_community_school_community_id JOIN barangay b ON b.barangay_id = sc.barangay_id JOIN municipality mun ON mun.municipality_id = b.municipality_municipality_id JOIN province pro ON pro.province_id = mun.province_province_id JOIN region r ON r.region_id = pro.region_region_id WHERE co.category_category_id = $1`, [category_id])
        return data.rows
    }catch(error){
        return error.message
    }
}

councilModel.getCouncil = async function(){
    try{
        const sql = "SELECT * FROM public.council co JOIN category ca ON co.category_category_id = ca.category_id JOIN school_community sc ON sc.school_community_id = co.school_community_school_community_id JOIN barangay b ON b.barangay_id = sc.barangay_id JOIN municipality mun ON mun.municipality_id = b.municipality_municipality_id JOIN province pro ON pro.province_id = mun.province_province_id JOIN region r ON r.region_id = pro.region_region_id"
        const data = await pool.query(sql)
        return data
    }catch(error){
        return error.message
    }
}

module.exports = councilModel