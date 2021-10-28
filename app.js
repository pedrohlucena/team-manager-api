const express = require('express')
require('./config/database')

const app = express()

var employeeRouter = require('./app/routes/employee');
var squadRouter = require('./app/routes/squad');

app.use(express.json());
app.use('/employee', employeeRouter);
app.use('/squad', squadRouter)

app.listen(3000)