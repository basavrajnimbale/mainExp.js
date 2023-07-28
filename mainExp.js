const express = require('express');
const mainExp = express();

mainExp.use((req, res, next) => {
  console.log('In the midleware!');
  next();
});

mainExp.use((req, res, next) => {
  console.log('In another midleware!');
  res.send('<h1>Hello from Express!</h1>');
});

const PORT = 8000;
mainExp.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});