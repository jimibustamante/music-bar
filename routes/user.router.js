const express = require('express')
const UserService = require('../services/user.services.js')

const router = express.Router()
const service = new UserService()

router.get('/', async (req, res) => {
  console.log('Fetching all Users')
  const users = await service.getAll()
  console.log({ users })
  res.json(users)
})

module.exports = router
