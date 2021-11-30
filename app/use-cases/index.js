const { EmployeeRepository } = require('../repositories/index')
const { SquadRepository } = require('../repositories/index')

const buildCreateEmployee = require('../use-cases/employee/create')
const buildGetEmployee = require('../use-cases/employee/get')
const buildGetAllEmployees = require('../use-cases/employee/getAll')
const buildDeleteEmployee = require('../use-cases/employee/delete')

const buildCreateSquad = require('../use-cases/squad/create')
const buildGetSquad = require('../use-cases/squad/get')
const buildGetAllSquads = require('../use-cases/squad/getAll')
const buildAddNewEmployee = require('../use-cases/squad/addNewEmployee')


const createEmployee = buildCreateEmployee( { EmployeeRepository })
const getEmployee = buildGetEmployee( { EmployeeRepository })
const getAllEmployees = buildGetAllEmployees( { EmployeeRepository })
const deleteEmployee = buildDeleteEmployee( { EmployeeRepository })

const createSquad = buildCreateSquad( { SquadRepository })
const getSquad = buildGetSquad( { SquadRepository })
const getAllSquads = buildGetAllSquads( { SquadRepository })
const addNewEmployee = buildAddNewEmployee( { SquadRepository })

module.exports = { createEmployee, getEmployee, getAllEmployees, deleteEmployee,
                   createSquad, getSquad, getAllSquads, addNewEmployee}