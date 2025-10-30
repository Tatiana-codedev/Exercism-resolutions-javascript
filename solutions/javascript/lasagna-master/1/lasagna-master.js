/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return 'Lasagna is done.'
  } else if (remainingTime > 0) {
    return 'Not done, please wait.'
  } else {
    return 'You forgot to set the timer.'
  }
}

export function preparationTime(layers, time = 2) {
  return layers.length * time;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  for (let layer of layers) {
    if (layer === 'noodles') {
      noodles += 50
    } else if (layer === 'sauce') {
      sauce += 0.2
    }
  }
  return {noodles, sauce};
}

export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1]
  myList.push(secretIngredient);
  
}

export function scaleRecipe(recipe, numberOfPortions) {
  let scaledRecipe = {}
  for (let ingredient in recipe) {
   scaledRecipe[ingredient] = recipe[ingredient] * (numberOfPortions / 2)
  }
  return scaledRecipe;
}