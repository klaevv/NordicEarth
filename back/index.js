const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const requestLogger = (req, res, next) => {
  console.log('Method:', req.method)
  console.log('Path:  ', req.path)
  console.log('Body:  ', req.body)
  console.log('---')
  next()
}
app.use(requestLogger)

const coordinates = [
  {
    id: 1,
    gps: '62.738868,7.150271',
    locationName: 'Molde'
  },
  {
    id: 2,
    gps: '59.357826,17.785493',
    locationName: 'Stockholm'
  },
  {
    id: 3,
    gps: '55.668677,12.073107',
    locationName: 'Roskilde'
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Nordic Earth back–end</h1>')
})

app.get('/api/coordinates', (req, res) => {
  res.json(coordinates)
})

app.get('/api/coordinates/:id', (req, res) => {
  const id = Number(req.params.id)
  const coordinate = coordinates.find((c) => c.id === id)
  if (coordinate) {
    res.json(coordinate)
  } else {
    res.status(404).send({ error: 'unknown endpoint' })
  }
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
