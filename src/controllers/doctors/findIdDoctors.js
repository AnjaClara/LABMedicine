const Doctor = require('../../models/doctor');

async function findIdDoctors(request, response){

  try {
    
    const idDoctor = await Doctor.findByPk(request.params.id);

    if (idDoctor){
      return response.status(200).json(idDoctor);
    } else {
      return response.status(404).json({message: 'Doctor not found!'});
    }

  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = findIdDoctors;