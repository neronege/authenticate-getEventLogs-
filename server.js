  
const express = require('express')
const app = express()


app.use(express.json())

const users = []

app.get('/authenticate', (req, res) => {
  res.json(users)
})

app.post('/authenticate',  (req, res) => {
  const user = {email: req.body.email, password: req.body.password }
  users.push(user)  
  res.status(201).send()
  }
)
const getEventLogs = []
app.get('/getEventLogs', (req, res) => {
    res.json(getEventLogs)
  })
  
  app.post('/getEventLogs',  (req, res) => {
    const user = {beginDate: req.body.beginDate, endDate: req.body.endDate }
    getEventLogs.push(getEventLog)  
    res.status(201).send()
    }
  )



app.listen(3000)