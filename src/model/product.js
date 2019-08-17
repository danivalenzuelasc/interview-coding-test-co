// Declare model Product
class Product {
  /**
   * Method constructor()
   * @param {string} [name] Product name
   * @param {number} [price] Price of the product
   * @param {number} [sellIn] Sell in of the product
   */
  constructor(name, sellIn, price) {
    this.name = name;
    this.price = price;
    this.sellIn = sellIn;
  }
}

// Export model Product
module.exports = Product;
