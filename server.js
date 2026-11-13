import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const port = process.env.PORT || 10000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDirectory = path.join(__dirname, 'dist')

app.use(express.json())

// This endpoint is used by Render to verify that the service is healthy.
app.get('/api/health', (_request, response) => {
  response.json({ ok: true })
})

// Future backend endpoints belong above the static-file and SPA fallback middleware.
app.use(express.static(distDirectory))

// Serve React's entry point for client-side routes such as /clubs and /quiz.
app.use((request, response) => {
  if (request.path.startsWith('/api/')) {
    return response.status(404).json({ message: 'API route not found' })
  }

  return response.sendFile(path.join(distDirectory, 'index.html'))
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`)
})
