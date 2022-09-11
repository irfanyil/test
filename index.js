const express = require('express')
const app = express()

const port = process.env.PORT || 3535;

app.get('/', (req, res) => res.send('Hello Adjust & Irfan!'))

app.listen(port, (err) => {
    if (err) {
      console.log('Error::', err);
    }
    console.log(`app listening on port ${port}`);
});
