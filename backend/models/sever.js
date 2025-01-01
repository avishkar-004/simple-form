const express = require("express");
const sequelize = require("../util/database"); 
const Routes = require("../routes/route");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ 
  origin: 'http://localhost:3000', 
  optionsSuccessStatus: 200 })); 
app.use("/api", Routes); 


async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start the server:", err);

  }
}

startServer();
