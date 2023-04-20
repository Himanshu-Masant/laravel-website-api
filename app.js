import express from "express";

const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("It's Working");
});

app.post("/check", (req, res) => {
  const obj = {
    is_main_product_valid: true,
    main_product_registered: false,
    invalid_modules: [],
    modules_not_registered: [],
    multiple_registration: false,
    multiple_registration_modules: [],
  };

  res.send(obj);
});

app.listen(port, () => {
  console.log(`Active on port http://localhost:${port}`);
});
