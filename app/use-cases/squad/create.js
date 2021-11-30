module.exports = ({ SquadRepository }) => {
    return async ({ name, employees }) => {
        try {
            if (name === undefined) {
                const squad = await SquadRepository.create({ employees: employees })
            }
            const squad = await SquadRepository.create({ name: name, employees: employees })
        
            return {
                status: 200,
                data: squad
            }
        } catch (error) {
            console.error(error)

            return {
                status: 500,
                data: { error: 'Problem to create a new squad' }
            }
        }
    }
}