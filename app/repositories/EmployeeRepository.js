const EmployeeModel = require('../model/employee')

export default function buildEmployeeRepository() {
    return Object.freeze ({
        getAll,
        find,
        create,
        remove
    })

    async function getAll() {
        const employees = await EmployeeModel.find({})
        return employees
    }

    async function create({ ...data }) {
        const employeeCreated = EmployeeModel.create({ ...data })
        return employeeCreated
    }

    async function remove(id) {
        await EmployeeModel.findByIdAndDelete(id)
    }

    async function find(id) {
        const employee = await EmployeeModel.findById(id)
        return employee
    }
}
