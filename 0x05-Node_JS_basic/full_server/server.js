import routes from '../routes/index.js';

const express = require('express');

const app = express();
const port = 1245;

routes(app);

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});

export default app;
module.exports = app;
