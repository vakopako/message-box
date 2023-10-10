const express = require('express')
const bodyParser = require('body-parser')

import { Application } from 'express'

const PORT = process.env.PORT || 3222

const app: Application = express()

// Middlewares
app.use(bodyParser.json())

/**
 * @description Middleware to check if the API key is valid
 */
app.use((req, res, next) => {
  const apiKey = req.headers['x-api-key']
  if (apiKey === process.env.API_KEY) {
    return next()
  } else {
    return res.status(403).json({ error: 'Unauthorized' })
  }
})

/**
 * Route middlewares
 */

// Message Routes
app
  .route('/api/messages')
  .get((req, res) => {
    res.json({ data: 'GET messages' })
  })
  .post((req, res) => {
    res.json({ data: 'Message posted' })
  })

// Group Routes
app
  .route('/api/groups')
  .get((req, res) => {
    res.json({ data: 'GET groups' })
  })
  .post((req, res) => {
    res.json({ data: 'Group created' })
  })

// Server to listen on port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
