const products = [
  { name: "laptop", price: 1000 },
  { name: "mobile", price: 500 },
  { name: "watch", price: 200 },
  { name: "tablet", price: 700 },
];
//filter
const filteredProducts = products.filter((product) => product.price >= 500);
console.log(filteredProducts);
//map
const seleProducts = filteredProducts.map((product) => {
  product.price = product.price / 2;
  return product;
});
console.log(seleProducts);
//discount_product
const discountedProducts = seleProducts.reduce((acc, curr, index, arr) => {
  if (index === arr.length - 1) {
    return acc + curr.name + "-" + curr.price;
  } else {
    return acc + curr.name + "-" + curr.price + ", ";
  }
}, "discounted product:");
console.log(discountedProducts);


// array helper method chaining
products2= [
    { name: "laptop", price: 1000 },
    { name: "mobile", price: 500 },
    { name: "watch", price: 200 },
    { name: "tablet", price: 700 },
  ];
const discountProducts2 = products2
  .filter((product) => product.price >= 500)
  .map((product) => {
    product.price = product.price / 2;
    return product;
  })
  .reduce((acc, curr, index, arr) => {
    if (index === arr.length - 1) {
      return acc + curr.name + "-" + curr.price;
    } else {
      return acc + curr.name + "-" + curr.price + ", ";
    }
  }, "discounted product:");

console.log(discountProducts2);
