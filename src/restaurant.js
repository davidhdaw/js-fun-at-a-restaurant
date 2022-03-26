var pizzaRestaurant = {
  name: 'placeholder',

}

function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }
};

function addMenuItem(restaurant, item) {
  var itemType = item.type;
  if (restaurant.menus[itemType].includes(item)) {}
    else {
  restaurant.menus[itemType].push(item);}
};

function removeMenuItem(restaurant, item, type) {
for (i = 0; i < restaurant.menus[type].length; i++ ) {
  if (restaurant.menus[type][i].name === item) {
    restaurant.menus[type].splice(i, 1);
    return `No one is eating our ${item} - it has been removed from the ${type} menu!`
  } else {}
} return `Sorry, we don't sell ${item}, try adding a new recipe!`
};


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
};
