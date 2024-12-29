const express = require('express');

const app = express();

// Middleware
app.use(express.json());


//commiting the comment
// Start the Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
