const express = require("express");

const app = express();
app.use(express.json());

const users = [{ id: 1, name: "Alice" }];

app.get("/users", (req, res) => {
  console.log(`User Data: ${JSON.stringify(users)}}`);
  res.json(users);
});

app.listen(3001, () => console.log("User-Service läuft auf Port 3001"));
