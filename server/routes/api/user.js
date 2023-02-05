const { Router } = require('express')

const route = Router()

route.get('/', (req, res) => {
  // todo : send current user
  res.send({
    user: {
      email: 'kichu@gmail.com',
      token: 'jwt.token.here',
      username: 'jake',
      bio: 'I work here',
      image: 'null',
    },
  })
})

module.exports = route
