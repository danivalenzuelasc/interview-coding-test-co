// Declare dependencies
const fs = require('fs');
const Product = require('./model/product');
const CarInsurance = require('./model/carInsurance');

// Setting writeStream
const logger = fs.createWriteStream('products_after_30_days.txt', {
  flags: 'w',
});

// Settings products
const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new Product('Full Coverage', 2, 0),
  new Product('Low Coverage', 5, 7),
  new Product('Mega Coverage', 0, 80),
  new Product('Mega Coverage', -1, 80),
  new Product('Special Full Coverage', 15, 20),
  new Product('Special Full Coverage', 10, 49),
  new Product('Special Full Coverage', 5, 49),
  new Product('Super Sale', 3, 6),
];
const carInsurance = new CarInsurance(productsAtDayZero);

// Print results
const productPrinter = (product) => {
  logger.write(`${product.name}, ${product.sellIn}, ${product.price}\n`);
};
logger.write('-------- day 0 --------\n');
logger.write('name, sellIn, price\n');
carInsurance.products.forEach(productPrinter);
for (let i = 1; i <= 30; i += 1) {
  logger.write('\n');
  logger.write(`-------- day ${i} --------\n`);
  logger.write('name, sellIn, price\n');
  carInsurance.updatePrice().forEach(productPrinter);
}
logger.close();
