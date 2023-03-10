import React from 'react'
import axios from 'axios'

const baseUrl = 'https://localhost:3000/'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(reponse => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(reponse => response.data)
}

export default { getAll, create, update }
