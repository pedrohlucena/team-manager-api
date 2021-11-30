module.exports = ({ SquadRepository }) => {
    return async ( squadID, employeeToAdd ) => {
        try {
            const newSquad = await SquadRepository.addNewEmployee(squadID, employeeToAdd)
            return { 
                status: 200, 
                data: newSquad 
            }
        } catch (error) {
            console.error(error) 

            return { 
                status: 401, 
                data:{ error: "Problem to create a new employee" }
            }
        }
    }
}