require('./config/database')
const express = require('express')
const employeeRouter = require('./app/routes/employee');
const squadRouter = require('./app/routes/squad');

const app = express()

app.use(express.json());
app.use('/employee', employeeRouter);
app.use('/squad', squadRouter)

app.listen(3000)