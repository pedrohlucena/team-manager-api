const SquadModel = require('../model/squad')

function buildSquadRepository() {
    return Object.freeze ({
        getAll,
        find,
        create,
        addNewEmployee
    })

    async function getAll() {
        return await SquadModel.find({}).populate('employees')
    }

    async function create( { ...data } ) {
        const squadCreated = new SquadModel( { ...data } )
        await squadCreated.save()

        return await SquadModel.findById(squadCreated._id).populate('employees')
    }

    async function addNewEmployee(squadID, employeeToAdd) {
        let squad = await SquadModel.findById(squadID)
        squad.employees.push(employeeToAdd)
        await squad.save()

        return await SquadModel.findById(squadID).populate('employees')
    }

    async function find(id) {
        const squad = await SquadModel.findById(id)

        return await SquadModel.findById(id).populate('employees')
    }
}

module.exports = buildSquadRepository