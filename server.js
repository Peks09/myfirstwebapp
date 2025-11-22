const express = require('express');
const app = express();

// Render uses process.env.PORT automatically
const PORT = process.env.PORT || 3000;

// Homepage route
app.get('/', (req, res) => {
    res.send(`
        <h1>My Node.js App</h1>
        <p>Full Name: Mondalo, Axel Gerard M.</p>
        <p>Class Section: BSIT - BA - 4102</p>
        <p>Inspirational Quote: "Jeremiah 29:11 For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future."</p>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
