import express from 'express'
import 'dotenv/config'

const app = express()
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() })
})

const port = Number(process.env.PORT ?? 3000)
app.listen(port, () => console.log(`API on http://localhost:${port}`))
