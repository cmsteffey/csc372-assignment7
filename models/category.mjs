import pool from "./db.mjs"
export async function getAllCategories(){
    return (await pool.query("SELECT category, count(*) as num FROM jokes GROUP BY category")).rows
}
export async function getAllJokesInCategory(category){
    if(category === undefined){
        return [];
    }
    let jokesInCategory = (await pool.query("SELECT * from jokes j WHERE j.category = $1", [category])).rows;
    if(jokesInCategory.length > 0){
        return jokesInCategory;
    } else {
        return null;
    }
}