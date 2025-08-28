const User = require('../models/user')
const Recipes = require('../models/recipe')

const getRecipes = async (req, res) => {
    const recipes = await Recipes.find()
    return res.status(201).json(recipes);
};
const getRecipe = async (req, res) => {
    const recipe = await Recipes.findById(req.params.id)
    res.json(recipe)
};
const addRecipe = async (req, res) => {
    const { title, ingredients, instructions, time } = req.body;
    console.log('add recipe called')
    if (!title || !ingredients || !instructions) {
        res.json({ message: "Required fields can't be empty" });
    }
    const newRecipe = await Recipes.create({
        title,
        ingredients,
        instructions,
        time,
    });
    return res.json(newRecipe);
};

const editRecipe = async (req, res) => {
    const { title, ingredients, instructions, time } = req.body;
    let recipe = await Recipes.findById(req.params.id)
    try {
        if (recipe) {
            await Recipes.findByIdAndUpdate(req.params.id, req.body, { new: true })
            return res.json({ title, ingredients, instructions, time })
        }
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: "error" })
    }
    let user = await User.find({ email })
    if (user) {
        return res.status(400).json({ email: 'Email is already exist' })
    }
};
const deleteRecipe = (req, res) => {
    res.json({ msg: "deleted user" });
};

module.exports = {
    getRecipes,
    getRecipe,
    addRecipe,
    editRecipe,
    deleteRecipe,
};
