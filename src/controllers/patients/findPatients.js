const Patient = require('../../models/patient');

async function findPatients(request, response){

  try {

    let whereClause = {};

    if (request.query.service_status) {
      whereClause = {
        service_status: request.query.service_status
      };
    }

    const patients = await Patient.findAll({
      where: whereClause
    });

    response.status(200).json(patients);
    
  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = findPatients;