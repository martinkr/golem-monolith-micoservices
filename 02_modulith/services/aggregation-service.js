const { getUsers, getProducts, getOrders } = require("./data-service.js");

const getAggregatedOrders = () => {
  const users = getUsers();
  const products = getProducts();
  const orders = getOrders();

  return orders.map((order) => {
    const user = users.find((u) => u.id === order.userId);
    const product = products.find((p) => p.id === order.productId);
    return {
      id: order.id,
      user: user ? { id: user.id, name: user.name } : null,
      product: product ? { id: product.id, name: product.name } : null,
    };
  });
};

module.exports = { getAggregatedOrders };
