module.exports = ({ SquadRepository }) => {
    return async (id) => {
        try {
            const squadInfo = await SquadRepository.find(id)
            return { 
                status: 200, 
                data: squadInfo 
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