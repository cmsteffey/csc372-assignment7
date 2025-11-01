import * as categoryModel from '../models/category.mjs';
export async function getCategories(req,res){
    let categories = await categoryModel.getAllCategories();
    return res.status(200).json(categories);
}
export async function getAllInCategory(req,res){
    if(!req.params.category){
        return res.status(400).text("Missing Category");
    }
    let allInCategory = await categoryModel.getAllJokesInCategory(req.params.category);
    if(allInCategory === null){
        return res.status(404).json({message:"Category Not Found"});
    }
    return res.status(200).json(allInCategory);
}