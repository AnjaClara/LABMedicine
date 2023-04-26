const Patient = require('../../models/patient');

async function updatePatient(request, response){

  try {

    const patientInDatabase = await Patient.findByPk(request.params.id);

    if(!patientInDatabase){
      return response.status(404).json({message: 'Patient not found!'});
    }

    patientInDatabase.full_name = request.body.full_name || patientInDatabase.full_name;
    patientInDatabase.gender = request.body.gender || patientInDatabase.gender;
    patientInDatabase.date_of_birth = request.body.date_of_birth || patientInDatabase.date_of_birth;
    patientInDatabase.cpf = request.body.cpf || patientInDatabase.cpf;
    patientInDatabase.phone_number = request.body.phone_number || patientInDatabase.phone_number;
    patientInDatabase.contact_emergency = request.body.contact_emergency || patientInDatabase.contact_emergency;
    patientInDatabase.list_of_allergies = request.body.list_of_allergies || patientInDatabase.list_of_allergies;
    patientInDatabase.care_list = request.body.care_list || patientInDatabase.care_list;
    patientInDatabase.health_insurance = request.body.health_insurance || patientInDatabase.health_insurance;
    patientInDatabase.service_status = request.body.service_status;
    patientInDatabase.total_of_service = request.body.total_of_service;

    if (patientInDatabase.service_status || patientInDatabase.total_of_service){
      return response.status(400).json({message: "It's not possible to update the Status or Total of service in this path"});
    }
    
    await patientInDatabase.save();

    response.status(200).json(patientInDatabase);

  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = updatePatient;