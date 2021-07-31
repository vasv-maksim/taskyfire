const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Success',
  })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server run on port ${PORT}...`) });