import buildEmployeeRepository from '../repositories/EmployeeRepository'
import buildSquadRepository from './SquadRepository'

const EmployeeRepository = buildEmployeeRepository()
const SquadRepository = buildSquadRepository()

export {
    EmployeeRepository,
    SquadRepository
}