const Doctor = require('../../models/doctor');

async function updateDoctorStatus (request, response){

  try {
    
    const id = request.params.id;
    const doctorInDatabase = await Doctor.findByPk(id);

    if(!["ACTIVE", "INACTIVE"].includes(request.body.system_state)){
      return response.status(400).json({message: "The Service Status has to be ACTIVE or INACTIVE."});
    }

    if(!doctorInDatabase){
      return response.status(404).json({message: 'Doctor not found!'});
    }

    doctorInDatabase.system_state = request.body.system_state;

    await doctorInDatabase.save();

    return response.status(200).json(doctorInDatabase);

  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = updateDoctorStatus;