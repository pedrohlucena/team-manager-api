const EmployeeModel = require('../model/employee')

function buildEmployeeRepository() {
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
        const employeeCreated = new EmployeeModel({ ...data })
        employeeCreated.save()
        
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

module.exports = buildEmployeeRepository