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


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
