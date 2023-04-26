const Patient = require('../../models/patient');

async function findIdPatients(request, response){

  try {
    
    const idPatient = await Patient.findByPk(request.params.id);

    if (idPatient){
      return response.status(200).json(idPatient);
    } else {
      return response.status(404).json({message: 'Patient not found!'});
    }

  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = findIdPatients;