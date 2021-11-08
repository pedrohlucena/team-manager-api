import SquadModel from '../model/squad'

export default function buildSquadRepository() {
    return Object.freeze ({
        getAll,
        find,
        create,
        addNewEmployee
    })

    async function getAll() {
        const squads = await SquadModel.find({})
        return squads
    }

    async function create({ ...data }) {
        const squadCreated = SquadModel.create({ ...data })
        return squadCreated
    }

    async function addNewEmployee(squadId, employeeToAdd) {
        let squad = await SquadModel.findById(squadID)
        squad.employees.push(employee)
        await squad.save()

        return squad
    }

    async function find(id) {
        const squad = await SquadModel.findById(id)
        return squad
    }
}
