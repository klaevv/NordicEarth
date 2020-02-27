import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/coordinates'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const getCoordinateWithId = (id) => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then((response) => response.data)
}

export default { getAll, getCoordinateWithId }
