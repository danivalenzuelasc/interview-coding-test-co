// Declare dependencies
const mocks = require('./carInsurance.mocks');
const CarInsurance = require('./../../src/model/carInsurance');
const Product = require('./../../src/model/product');

// Settings products
const products = [
  new Product(mocks.input[0].name, mocks.input[0].sellIn, mocks.input[0].price),
  new Product(mocks.input[1].name, mocks.input[1].sellIn, mocks.input[1].price),
  new Product(mocks.input[2].name, mocks.input[2].sellIn, mocks.input[2].price),
  new Product(mocks.input[3].name, mocks.input[3].sellIn, mocks.input[3].price),
  new Product(mocks.input[4].name, mocks.input[4].sellIn, mocks.input[4].price),
  new Product(mocks.input[5].name, mocks.input[5].sellIn, mocks.input[5].price),
  new Product(mocks.input[6].name, mocks.input[6].sellIn, mocks.input[6].price),
];

/**
 * Run tests
 * Model CarInsurance
 */

// Test class CarInsurance
describe('Verify class CarInsurance', () => {
  test('Check method constructor', () => {
    const carInsurance = new CarInsurance();
    expect(carInsurance).toBeDefined();
    expect(carInsurance.products.length).toEqual(0);
  });
  test('Check method constructor with mocks', () => {
    const carInsurance = new CarInsurance(products);
    expect(carInsurance).toBeDefined();
    expect(carInsurance.products.length).toEqual(7);
  });
});
// Test method CarInsurance.getPriceFullCoverage()
describe('Verify method getPriceFullCoverage()', () => {
  test('Check method with mocks[0]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceFullCoverage(mocks.input[0]);
    expect(price).toEqual(2);
  });
  test('Check method with mocks[1]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceFullCoverage(mocks.input[1]);
    expect(price).toEqual(8);
  });
  test('Check method with mocks[2]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceFullCoverage(mocks.input[2]);
    expect(price).toEqual(9);
  });
  test('Check method with mocks[3]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceFullCoverage(mocks.input[3]);
    expect(price).toEqual(81);
  });
  test('Check method with mocks[4]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceFullCoverage(mocks.input[4]);
    expect(price).toEqual(21);
  });
  test('Check method with mocks[5]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceFullCoverage(mocks.input[5]);
    expect(price).toEqual(11);
  });
});
// Test method CarInsurance.getPriceLowCoverage()
describe('Verify method getPriceLowCoverage()', () => {
  test('Check method with mocks[0]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceLowCoverage(mocks.input[0]);
    expect(price).toEqual(0);
  });
  test('Check method with mocks[1]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceLowCoverage(mocks.input[1]);
    expect(price).toEqual(6);
  });
  test('Check method with mocks[2]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceLowCoverage(mocks.input[2]);
    expect(price).toEqual(7);
  });
  test('Check method with mocks[3]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceLowCoverage(mocks.input[3]);
    expect(price).toEqual(79);
  });
  test('Check method with mocks[4]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceLowCoverage(mocks.input[4]);
    expect(price).toEqual(19);
  });
  test('Check method with mocks[5]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceLowCoverage(mocks.input[5]);
    expect(price).toEqual(9);
  });
});
// Test method CarInsurance.getPriceMediumCoverage()
describe('Verify method getPriceMediumCoverage()', () => {
  test('Check method with mocks[0]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceMediumCoverage(mocks.input[0]);
    expect(price).toEqual(0);
  });
  test('Check method with mocks[1]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceMediumCoverage(mocks.input[1]);
    expect(price).toEqual(6);
  });
  test('Check method with mocks[2]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceMediumCoverage(mocks.input[2]);
    expect(price).toEqual(7);
  });
  test('Check method with mocks[3]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceMediumCoverage(mocks.input[3]);
    expect(price).toEqual(79);
  });
  test('Check method with mocks[4]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceMediumCoverage(mocks.input[4]);
    expect(price).toEqual(19);
  });
  test('Check method with mocks[5]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceMediumCoverage(mocks.input[5]);
    expect(price).toEqual(9);
  });
});
// Test method CarInsurance.getPriceSpecialFullCoverage()
describe('Verify method getPriceSpecialFullCoverage()', () => {
  test('Check method with mocks[0]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceSpecialFullCoverage(mocks.input[0]);
    expect(price).toEqual(4);
  });
  test('Check method with mocks[1]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceSpecialFullCoverage(mocks.input[1]);
    expect(price).toEqual(10);
  });
  test('Check method with mocks[2]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceSpecialFullCoverage(mocks.input[2]);
    expect(price).toEqual(11);
  });
  test('Check method with mocks[3]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceSpecialFullCoverage(mocks.input[3]);
    expect(price).toEqual(83);
  });
  test('Check method with mocks[4]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceSpecialFullCoverage(mocks.input[4]);
    expect(price).toEqual(23);
  });
  test('Check method with mocks[5]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceSpecialFullCoverage(mocks.input[5]);
    expect(price).toEqual(12);
  });
});
// Test method CarInsurance.getPriceSuperSale()
describe('Verify method getPriceSuperSale()', () => {
  test('Check method with mocks[0]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceSuperSale(mocks.input[0]);
    expect(price).toEqual(-1);
  });
  test('Check method with mocks[1]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceSuperSale(mocks.input[1]);
    expect(price).toEqual(5);
  });
  test('Check method with mocks[2]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceSuperSale(mocks.input[2]);
    expect(price).toEqual(6);
  });
  test('Check method with mocks[3]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceSuperSale(mocks.input[3]);
    expect(price).toEqual(78);
  });
  test('Check method with mocks[4]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceSuperSale(mocks.input[4]);
    expect(price).toEqual(18);
  });
  test('Check method with mocks[5]', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.getPriceSuperSale(mocks.input[5]);
    expect(price).toEqual(8);
  });
});
// Test method CarInsurance.limitPrice()
describe('Verify method limitPrice()', () => {
  test('Check method with price smaller than 0', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.limitPrice(-10);
    expect(price).toEqual(0);
  });
  test('Check method with price smaller than 0', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.limitPrice(-1);
    expect(price).toEqual(0);
  });
  test('Check method with price equal 0', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.limitPrice(0);
    expect(price).toEqual(0);
  });
  test('Check method with price between 0 and 50', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.limitPrice(15);
    expect(price).toEqual(15);
  });
  test('Check method with price between 0 and 50', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.limitPrice(37);
    expect(price).toEqual(37);
  });
  test('Check method with price equal 50', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.limitPrice(50);
    expect(price).toEqual(50);
  });
  test('Check method with price greater than 50', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.limitPrice(51);
    expect(price).toEqual(50);
  });
  test('Check method with price greater than 50', () => {
    const carInsurance = new CarInsurance();
    const price = carInsurance.limitPrice(60);
    expect(price).toEqual(50);
  });
});
// Test method CarInsurance.updatePrice()
describe('Verify method updatePrice()', () => {
  test('Check method with day 1', () => {
    const carInsurance = new CarInsurance(products);
    for (let i = 1; i <= 1; i += 1) {
      carInsurance.updatePrice();
    }
    expect(carInsurance.products).toEqual(mocks.output.day1);
  });
  test('Check method with day 3', () => {
    const carInsurance = new CarInsurance(products);
    for (let i = 1; i <= 2; i += 1) {
      carInsurance.updatePrice();
    }
    expect(carInsurance.products).toEqual(mocks.output.day3);
  });
  test('Check method with day 10', () => {
    const carInsurance = new CarInsurance(products);
    for (let i = 1; i <= 7; i += 1) {
      carInsurance.updatePrice();
    }
    expect(carInsurance.products).toEqual(mocks.output.day10);
  });
});
// Test method CarInsurance.updateProduct()
describe('Verify method updateProduct()', () => {
  test('Check method with mocks[0]', () => {
    const carInsurance = new CarInsurance(products);
    carInsurance.updateProduct(mocks.input[1], 0);
    expect(carInsurance.products[0]).toEqual(mocks.input[1]);
  });
  test('Check method with mocks[1]', () => {
    const carInsurance = new CarInsurance(products);
    carInsurance.updateProduct(mocks.input[2], 1);
    expect(carInsurance.products[1]).toEqual(mocks.input[2]);
  });
  test('Check method with mocks[2]', () => {
    const carInsurance = new CarInsurance(products);
    carInsurance.updateProduct(mocks.input[3], 2);
    expect(carInsurance.products[2]).toEqual(mocks.input[3]);
  });
  test('Check method with mocks[3]', () => {
    const carInsurance = new CarInsurance(products);
    carInsurance.updateProduct(mocks.input[4], 3);
    expect(carInsurance.products[3]).toEqual(mocks.input[4]);
  });
  test('Check method with mocks[4]', () => {
    const carInsurance = new CarInsurance(products);
    carInsurance.updateProduct(mocks.input[5], 4);
    expect(carInsurance.products[4]).toEqual(mocks.input[5]);
  });
  test('Check method with mocks[5]', () => {
    const carInsurance = new CarInsurance(products);
    carInsurance.updateProduct(mocks.input[0], 5);
    expect(carInsurance.products[5]).toEqual(mocks.input[0]);
  });
});
