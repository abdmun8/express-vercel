const express = requore("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/landing", (req, res) => {
  res.json({ message: "Hello landing" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
