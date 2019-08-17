// Declare dependencies
const mocks = require('./product.mocks');
const Product = require('./../../src/model/product');

// Run tests
it('Verify if the consumer called the class constructor', () => {
  const product = new Product();
  expect(product).toBeDefined();
});
it('Verify model structure', () => {
  const product = new Product(mocks[0].name, mocks[0].sellIn, mocks[0].price);
  expect(product).toBeDefined();
  expect(product.id).toBeDefined();
  expect(product.name).toEqual(mocks[0].name);
  expect(product.price).toEqual(mocks[0].price);
  expect(product.sellIn).toEqual(mocks[0].sellIn);
});
it('Verify class attributes', () => {
  const product = new Product(mocks[1].name, mocks[1].sellIn, mocks[1].price);
  expect(product).toBeDefined();
  expect(typeof product.id).toEqual('string');
  expect(typeof product.name).toEqual('string');
  expect(typeof product.price).toEqual('number');
  expect(typeof product.sellIn).toEqual('number');
});
