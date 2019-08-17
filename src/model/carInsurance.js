// Declare model CarInsurance
class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  getPriceFullCoverage(product) {
    return product.price + (product.sellIn < 0 ? 2 : 1);
  }

  getPriceLowCoverage(product) {
    return product.price - (product.sellIn < 0 ? 2 : 1);
  }

  getPriceMediumCoverage(product) {
    return product.price - (product.sellIn < 0 ? 2 : 1);
  }

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

  getPriceSuperSale(product) {
    return product.price - 2 * (product.sellIn < 0 ? 2 : 1);
  }

  limitPrice(price) {
    return price < 0 ? 0 : price > 50 ? 50 : price;
  }

  updatePrice() {
    this.products.forEach((product, key) => {
      const productTemp = {
        name: product.name,
        price: product.price,
        sellIn: product.sellIn - 1,
      };
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

  updateProduct(product, key) {
    this.products[key] = product;
  }
}

// Export model CarInsurance
module.exports = CarInsurance;
