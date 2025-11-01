import * as jokeModel from "../models/joke.mjs";
import * as categoryModel from '../models/category.mjs'
export async function addJoke(req, res) {
    let category = req.body.category;
    if (typeof category !== "string") {
        return res.status(400).json({message: "'category' missing or invalid"});
    }
    let setup = req.body.setup;
    if (typeof setup !== "string") {
        return res.status(400).json({message: "'setup' missing or invalid"});
    }
    let delivery = req.body.delivery;
    if (typeof delivery !== "string") {
        return res.status(400).json({message: "'delivery' missing or invalid"});
    }
    await jokeModel.createJoke(category, setup, delivery);
    if (req.query.form){
        return res.redirect(303, `/jokeCategory.html?category=${category}`);
    }
    return res.json(await categoryModel.getAllJokesInCategory(category));
}
export async function getRandomJoke(req, res) {
    let joke = await jokeModel.getRandomJoke();
    return res.json(joke);
}