const users = [{ id: 1, name: "Alice" }];
const products = [{ id: 1, name: "Laptop" }];
const orders = [{ id: 1, userId: 1, productId: 1 }];

const getUsers = () => {
  console.log(`User Data: ${JSON.stringify(users)}`);
  return users;
};

const getProducts = () => {
  console.log(`Product Data: ${JSON.stringify(products)}}`);
  return products;
};

const getOrders = () => {
  console.log(`Order Data: ${JSON.stringify(orders)}`);
  return orders;
};

module.exports = { getUsers, getProducts, getOrders };
