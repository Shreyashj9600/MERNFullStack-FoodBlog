const express = require("express");
const {
    getRecipes,
    getRecipe,
    editRecipe,
    deleteRecipe,
    addRecipe,
} = require("../controllers/recipe");
const router = express.Router();

router.get("/", getRecipes); // Get all the recipes
router.get("/:id", getRecipe); // Get recipe by id
router.post("/", addRecipe); // Add recipe
router.put("/:id", editRecipe); // Edit recipe
router.delete("/:id", deleteRecipe); // Delete recipe

module.exports = router;       