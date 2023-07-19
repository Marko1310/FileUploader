// Import dependencies
import app from "./app";

// Setup server
const PORT = process.env.PORT || 8000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
