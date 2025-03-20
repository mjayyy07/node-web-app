const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Default route
app.get('/', (req, res) => {
    res.send("Hello! Node JS Activity");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
