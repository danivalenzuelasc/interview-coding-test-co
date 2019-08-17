// Declare dependencies
const uuid = require('uuid/v4');

// Declare model Product
class Product {
  constructor(name, sellIn, price) {
    this.id = uuid();
    this.name = name;
    this.price = price;
    this.sellIn = sellIn;
  }
}

// Export model Product
module.exports = Product;
