// Exports mocks CarInsurance
module.exports = {
  input: [
    {
      name: 'Full Coverage',
      price: 1,
      sellIn: 1,
    }, {
      name: 'Low Coverage',
      price: 7,
      sellIn: 2,
    }, {
      name: 'Medium Coverage',
      price: 8,
      sellIn: 3,
    }, {
      name: 'Mega Coverage',
      price: 80,
      sellIn: 4,
    }, {
      name: 'Special Full Coverage',
      price: 20,
      sellIn: 5,
    }, {
      name: 'Super Sale',
      price: 10,
      sellIn: 6,
    }, {
      name: 'Special Full Coverage',
      price: 20,
      sellIn: 20,
    },
  ],
  output: {
    day1: [
      {
        name: 'Full Coverage',
        price: 2,
        sellIn: 0,
      }, {
        name: 'Low Coverage',
        price: 6,
        sellIn: 1,
      }, {
        name: 'Medium Coverage',
        price: 7,
        sellIn: 2,
      }, {
        name: 'Mega Coverage',
        price: 80,
        sellIn: 4,
      }, {
        name: 'Special Full Coverage',
        price: 23,
        sellIn: 4,
      }, {
        name: 'Super Sale',
        price: 8,
        sellIn: 5,
      }, {
        name: 'Special Full Coverage',
        price: 21,
        sellIn: 19,
      },
    ],
    day3: [
      {
        name: 'Full Coverage',
        price: 6,
        sellIn: -2,
      }, {
        name: 'Low Coverage',
        price: 3,
        sellIn: -1,
      }, {
        name: 'Medium Coverage',
        price: 5,
        sellIn: 0,
      }, {
        name: 'Mega Coverage',
        price: 80,
        sellIn: 4,
      }, {
        name: 'Special Full Coverage',
        price: 29,
        sellIn: 2,
      }, {
        name: 'Super Sale',
        price: 4,
        sellIn: 3,
      }, {
        name: 'Special Full Coverage',
        price: 23,
        sellIn: 17,
      },
    ],
    day10: [
      {
        name: 'Full Coverage',
        price: 20,
        sellIn: -9,
      }, {
        name: 'Low Coverage',
        price: 0,
        sellIn: -8,
      }, {
        name: 'Medium Coverage',
        price: 0,
        sellIn: -7,
      }, {
        name: 'Mega Coverage',
        price: 80,
        sellIn: 4,
      }, {
        name: 'Special Full Coverage',
        price: 0,
        sellIn: -5,
      }, {
        name: 'Super Sale',
        price: 0,
        sellIn: -4,
      }, {
        name: 'Special Full Coverage',
        price: 31,
        sellIn: 10,
      },
    ],
  },
};
