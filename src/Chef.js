class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  };
  greetCustomer(name, morning){
    if (morning === true) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`
    };
  };
}

module.exports = Chef;
