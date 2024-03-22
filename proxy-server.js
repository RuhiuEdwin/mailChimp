const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); // Import body-parser
const app = express();

const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: "d84d1a0396629fe5dd4e3e4fba5fe2b6-us18",
  server: "us18",
});

app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

app.post("/addToList", async (req, res) => {
  try {
    const response = await client.lists.addListMember("047bea4814", req.body, {
      skipMergeValidation: false,
    });
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
