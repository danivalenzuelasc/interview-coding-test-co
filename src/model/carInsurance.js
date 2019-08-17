// Declare model CarInsurance
class CarInsurance {
  /**
   * Method constructor()
   * @param {array} [products] (Product list)
   *  @param {object} [product] (Product attributes)
   *   @param {string} [name] Product name
   *   @param {number} [price] Price of the product
   *   @param {number} [sellIn] Sell in of the product
   */
  constructor(products = []) {
    this.products = products;
  }

  /**
   * Method getPriceFullCoverage()
   * Returns the value obtained from the price according to conditions for the Full Coverage type
   * @param {object} [product] (Product attributes)
   *  @param {string} [name] Product name
   *  @param {number} [price] Price of the product
   *  @param {number} [sellIn] Sell in of the product
   * @returns {number} Price calculated according to indications
   */
  getPriceFullCoverage(product) {
    return product.price + (product.sellIn < 0 ? 2 : 1);
  }

  /**
   * Method getPriceLowCoverage()
   * Returns the value obtained from the price according to conditions for the Low Coverage type
   * @param {object} [product] (Product attributes)
   *  @param {string} [name] Product name
   *  @param {number} [price] Price of the product
   *  @param {number} [sellIn] Sell in of the product
   * @returns {number} Price calculated according to indications
   */
  getPriceLowCoverage(product) {
    return product.price - (product.sellIn < 0 ? 2 : 1);
  }

  /**
   * Method getPriceMediumCoverage()
   * Returns the value obtained from the price according to conditions for the Medium Coverage type
   * @param {object} [product] (Product attributes)
   *  @param {string} [name] Product name
   *  @param {number} [price] Price of the product
   *  @param {number} [sellIn] Sell in of the product
   * @returns {number} Price calculated according to indications
   */
  getPriceMediumCoverage(product) {
    return product.price - (product.sellIn < 0 ? 2 : 1);
  }

  /**
   * Method getPriceSpecialFullCoverage()
   * Returns the value obtained from the price according to conditions for the Special Full Coverage type
   * @param {object} [product] (Product attributes)
   *  @param {string} [name] Product name
   *  @param {number} [price] Price of the product
   *  @param {number} [sellIn] Sell in of the product
   * @returns {number} Price calculated according to indications
   */
  getPriceSpecialFullCoverage(product) {
    if (product.sellIn < 0) {
      return 0;
    }
    if (product.sellIn <= 5) {
      return product.price + 3;
    }
    if (product.sellIn <= 10) {
      return product.price + 2;
    }
    return product.price + 1;
  }

  /**
   * Method getPriceSuperSale()
   * Returns the value obtained from the price according to conditions for the Super Sale type
   * @param {object} [product] (Product attributes)
   *  @param {string} [name] Product name
   *  @param {number} [price] Price of the product
   *  @param {number} [sellIn] Sell in of the product
   * @returns {number} Price calculated according to indications
   */
  getPriceSuperSale(product) {
    return product.price - 2 * (product.sellIn < 0 ? 2 : 1);
  }

  /**
   * Method getPriceSuperSale()
   * Returns the value obtained from the price according to the specified limit conditions
   * @param {object} [price] Precio
   * @returns {number} Price calculated according to indications
   */
  limitPrice(price) {
    return price < 0 ? 0 : price > 50 ? 50 : price;
  }

  /**
   * Method updatePrice()
   * Returns the updated product list the next day of sale
   * @returns {object} Product class [name, price, sellIn]
   */
  updatePrice() {
    this.products.forEach((product, key) => {
      // Temporary product with new data to update
      const productTemp = {
        name: product.name,
        price: product.price,
        sellIn: product.sellIn - 1,
      };
      // We verify the type of product to calculate the price
      switch (product.name) {
        case 'Full Coverage':
          productTemp.price = this.limitPrice(this.getPriceFullCoverage(productTemp));
          this.updateProduct(productTemp, key);
          break;
        case 'Low Coverage':
          productTemp.price = this.limitPrice(this.getPriceLowCoverage(productTemp));
          this.updateProduct(productTemp, key);
          break;
        case 'Medium Coverage':
          productTemp.price = this.limitPrice(this.getPriceMediumCoverage(productTemp));
          this.updateProduct(productTemp, key);
          break;
        case 'Special Full Coverage':
          productTemp.price = this.limitPrice(this.getPriceSpecialFullCoverage(productTemp));
          this.updateProduct(productTemp, key);
          break;
        case 'Super Sale':
          productTemp.price = this.limitPrice(this.getPriceSuperSale(productTemp));
          this.updateProduct(productTemp, key);
          break;
        default:
          break;
      }
    });
    return this.products;
  }

  /**
   * Method getPriceSuperSale()
   * Returns the value obtained from the price according to conditions for the Super Sale type
   * @param {object} [product] (Product attributes)
   *  @param {string} [name] Product name
   *  @param {number} [price] Price of the product
   *  @param {number} [sellIn] Sell in of the product
   * @param {number} [key] Position within the array
   */
  updateProduct(product, key) {
    this.products[key] = product;
  }
}

// Export model CarInsurance
module.exports = CarInsurance;
