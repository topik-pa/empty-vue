import axios from 'axios'
import qs from 'querystring'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const HEADERS = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

export {postData}

function postData (data) {
  const url = `${BASE_URL}/todos/1`
  return axios({
    method: 'GET',
    url: url,
    data: qs.stringify(data),
    headers: HEADERS
  })
    .then(response => response.data)
}
