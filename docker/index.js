

const express = require('express')
const cors = require('cors');

const PORT = "8080";
const HOST = "0.0.0.0";

const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send({
        "course": ["HTML", "PHP", "NodeJs"]
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);