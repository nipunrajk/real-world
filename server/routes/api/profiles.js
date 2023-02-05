const { Router } = require('express')

const route = Router()

route.get('/:username', (req, res) => {
  res.send({
    "profile": {
      "username": req.params.username,
      "bio": 'i work in cyber',
      "image": 'static image',
      "following": false,
    },
  })
})

module.exports = route
