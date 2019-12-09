const express = require('express')
const app = express()

const coordinates = [
  {
    gps: "62.738868,7.150271",
    locationName: "Molde"
  },
  {
    gps: "59.357826,17.785493",
    locationName: "Stockholm"
  },
  {
    gps: "55.668677,12.073107",
    locationName: "Roskilde"
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/coordinates', (req, res) => {
  res.json(coordinates)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
