require('./config/database')
const express = require('express')

const app = express()

const employeeRouter = require('./app/routes/employee');
const squadRouter = require('./app/routes/squad');

app.use(express.json());
app.use('/employee', employeeRouter);
app.use('/squad', squadRouter)

app.listen(3000)