function nameMenuItem(food) {
  return `Delicious ${food}`
};

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type,
  }
};

function addIngredients(ingredient, array) {
    if (array.includes(ingredient) === true) {

    } else {
    array.push(ingredient);
    }
};

function formatPrice(initialPrice) {
  return '$' + initialPrice;
};

function decreasePrice(initialPrice) {
  return initialPrice * .9;
};

function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
