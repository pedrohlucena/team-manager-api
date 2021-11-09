const buildEmployeeRepository = require('../repositories/EmployeeRepository')
const buildSquadRepository = require('./SquadRepository')

const EmployeeRepository = buildEmployeeRepository()
const SquadRepository = buildSquadRepository()

module.exports = { EmployeeRepository, SquadRepository }