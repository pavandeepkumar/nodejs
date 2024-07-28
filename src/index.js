import express from 'express'

const app = express()

app.get('/', (req, res) => {
    return res.json({ "success": true, "message": "Server is working properly" })
})
app.listen(3000, () => {
    console.log("Server listening on port 3000")
})

export default app