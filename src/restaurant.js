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
if (item.type === 'breakfast') {
  restaurant.menus.breakfast.push(item);
} else if ()
};


module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
