const express = require('express');

const app = express();

async function main() {
  try {
    app.get('/', (req, res) => {
      res.status(200).json({
        message: 'Success',
      })
    })
    console.log('Do something');
  }
  catch (e) {
    console.log('Error:', e.message);
    process.exit(1);
  }
};

if (process.env.NODE_ENV === 'prod') {
  console.log('Do something as prod');
};

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server run on port ${PORT}...`) });

main();