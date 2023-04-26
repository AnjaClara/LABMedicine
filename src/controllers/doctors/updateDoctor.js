const Doctor = require('../../models/doctor');

async function updateDoctor(request, response){

  try {

    const doctorInDatabase = await Doctor.findByPk(request.params.id);

    if(!doctorInDatabase){
      return response.status(404).json({message: 'Doctor not found!'});
    }

    doctorInDatabase.full_name = request.body.full_name || doctorInDatabase.full_name;
    doctorInDatabase.gender = request.body.gender || doctorInDatabase.gender;
    doctorInDatabase.date_of_birth = request.body.date_of_birth || doctorInDatabase.date_of_birth;
    doctorInDatabase.cpf = request.body.cpf || doctorInDatabase.cpf;
    doctorInDatabase.phone_number = request.body.phone_number || doctorInDatabase.phone_number;
    doctorInDatabase.educational_institution = request.body.educational_institution || doctorInDatabase.educational_institution;
    doctorInDatabase.crmuf_registation = request.body.crmuf_registation || doctorInDatabase.crmuf_registation;
    doctorInDatabase.specialization = request.body.specialization || doctorInDatabase.specialization;
    doctorInDatabase.system_state = request.body.system_state;
    doctorInDatabase.total_appointments = request.body.total_appointments;

    if (doctorInDatabase.total_appointments || doctorInDatabase.system_state){
      return response.status(400).json({message: "It's not possible to update the Status or the Total of services in this path"});
    }
    
    await doctorInDatabase.save();

    response.status(200).json(doctorInDatabase);

  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = updateDoctor;