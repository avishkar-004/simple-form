const express = require("express");
const sequelize = require("../util/database"); // Adjusted path
const Routes = require("../routes/route"); // Adjusted path
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 30001;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api", Routes);

async function startServer() {
  try {
    // Test the database connection
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    // Sync models (optional, ensure this fits your use case)
    await sequelize.sync({ alter: true }); // Adjust as needed (e.g., `force: true` for dev)

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start the server:", err);
  }
}

startServer();
