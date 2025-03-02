const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());
let users;
let products;
let orders;

const getAggregatedOrders = async () => {
  users = await axios.get("http://localhost:3001/users");
  products = await axios.get("http://localhost:3002/products");
  orders = await axios.get("http://localhost:3003/orders");

  return orders.data.map((order) => {
    const user = users.data.find((u) => u.id === order.userId);
    const product = products.data.find((p) => p.id === order.productId);
    return {
      id: order.id,
      user: user ? { id: user.id, name: user.name } : null,
      product: product ? { id: product.id, name: product.name } : null,
    };
  });
};

app.get("/aggregation", async (req, res) => {
  let json;
  try {
    json = await getAggregatedOrders();
    console.log("getAggregatedOrders", json);
    res.json(json);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("Aggregation-Service läuft auf Port 3000"));
