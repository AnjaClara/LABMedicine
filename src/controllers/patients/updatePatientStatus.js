const Patient = require('../../models/patient');

async function updatePatientStatus (request, response){

  try {
    
    const id = request.params.id;
    const patientInDatabase = await Patient.findByPk(id);

    if(!["WAITING_FOR_SERVICE", "IN_ATTENDANCE", "ATTENDED", "NOT_ATTENDED"].includes(request.body.service_status)){
      return response.status(400).json({message: "The Service Status has to be WAITING_FOR_SERVICE, IN_ATTENDANCE, ATTENDED or NOT_ATTENDED."});
    }

    if(!patientInDatabase){
      return response.status(404).json({message: 'Patient not found!'});
    }

    patientInDatabase.service_status = request.body.service_status;

    await patientInDatabase.save();

    return response.status(200).json(patientInDatabase);

  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = updatePatientStatus;