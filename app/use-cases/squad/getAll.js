module.exports = ({ SquadRepository }) => {
    return async () => {
        try {
            const squads = await SquadRepository.getAll()
            return { 
                status: 200, 
                data: squads 
            }
        } catch (error) {
            console.error(error)

            return { 
                status: 500, 
                data: { error: error }
            }
        }
    }
}