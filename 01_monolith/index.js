let users = [{ id: 1, name: "Alice" }];
let products = [{ id: 1, name: "Laptop" }];
let orders = [{ id: 1, userId: 1, productId: 1 }];

console.log(`User Data: ${JSON.stringify(users)}`);
console.log(`Product Data: ${JSON.stringify(products)}}`);
console.log(`Order Data: ${JSON.stringify(orders)}`);

const getAggregatedOrders = () => {
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

console.log(`Aggregated Orders:`);
console.log(getAggregatedOrders());
