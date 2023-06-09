const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('john is busy shopping');
})

app.listen(port, () => {
    console.log(`Ema John simple is running on port ${port}`)
})