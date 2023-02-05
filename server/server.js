const express = require('express')
const app = express()

// for post request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(function (req, res, next) {
  res.set('Content-Security-Policy', "default-src 'none'; font-src https://fonts.gstatic.com");
  next();
});

// Routes
app.use('/api', require('./routes/api'))

app.listen(3000, () => {
  console.log('listening in port 3000')
})
