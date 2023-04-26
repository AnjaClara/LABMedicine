const Patient = require('../../models/patient');

async function deletePatient(request, response){

  try {

    const idPatient = await Patient.findByPk(request.params.id);

    if(!idPatient){
      return response.status(404).json({message: "There's no patient with this ID." });
    }
    
    await Patient.destroy({
      where: {
        id: request.params.id
      }
    })

    response.status(204).json({message: "Successfully deleted!"})

  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = deletePatient;