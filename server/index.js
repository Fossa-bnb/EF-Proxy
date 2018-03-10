const express = require('express');

const App = express();
const PORT = 4000; // will add evn path also

// will change this to be the correct folder
App.use(express.static(`${__dirname}/../client`));

App.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

