import process from 'node:process'
import http from 'node:http'

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/health',
  method: 'GET',
}

const request = http.request(options, (response) => {
  if (response.statusCode === 200) {
    process.exit(0)
  } else {
    process.exit(1)
  }
})

request.on('error', (error) => {
  console.error('Health Check ERROR:', error)
  process.exit(1)
})

request.end()
