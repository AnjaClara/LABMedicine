const Doctor = require('../../models/doctor');

async function findDoctors(request, response){

  try {

    let whereClause = {};

    if (request.query.system_state) {
      whereClause = {
        system_state: request.query.system_state
      };
    }

    const doctors = await Doctor.findAll({
      where: whereClause
    });

    response.status(200).json(doctors);
    
  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = findDoctors;