const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/:filename', (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(__dirname, 'public', fileName);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('File not found');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
