"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:id", (req, res) => {
    knex('ingredients')
      .from('ingredients')
      .join('recipe_ingredient','recipe_ingredient.ingredients_id', 'ingredients.id')
      .where('recipe_ingredient.recipe_id', req.params.id)
      .then((results) => {
        res.json(results);
        })
  });
  return router;
}