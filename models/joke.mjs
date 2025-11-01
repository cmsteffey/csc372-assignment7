import pool from "./db.mjs"
export async function createJoke(category, setup, delivery){
    (await pool.query("INSERT INTO jokes (category, setup, delivery) VALUES ($1, $2, $3)", [category, setup, delivery]));
}
export async function getRandomJoke(){
    let jokes = (await pool.query("SELECT category, setup, delivery FROM jokes")).rows;
    return jokes[Math.floor(Math.random() * jokes.length)];
}