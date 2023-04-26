const Patient = require('../../models/patient');

async function createPatient(request, response){

  try {

    const requestPatient = {

      full_name: request.body.full_name,
      gender: request.body.gender,
      date_of_birth: request.body.date_of_birth,
      cpf: request.body.cpf,
      phone_number: request.body.phone_number,
      contact_emergency: request.body.contact_emergency,
      list_of_allergies: request.body.list_of_allergies,
      care_list: request.body.care_list,
      health_insurance: request.body.health_insurance,
      service_status: request.body.service_status

    }

    if (!requestPatient.full_name){
      return response.status(400).json({message: "Please fill in the full name field."});
    }    

    if (!requestPatient.date_of_birth){
      return response.status(400).json({message: "Please fill in the date of birth field."});
    }

    if (!requestPatient.cpf){
      return response.status(400).json({message: "Please fill in the cpf field."});
    }

    if (!requestPatient.contact_emergency){
      return response.status(400).json({message: "Please fill in the emergency contact field."});
    }

    switch (requestPatient.service_status) {
      case "WAITING_FOR_SERVICE":
        break;
      case "IN_ATTENDANCE":
        break;
      case "ATTENDED":
        break;
      case "NOT_ATTENDED":
        break;
      default:
        return response
          .status(404)
          .json({ message: "This status does not exist!" });
    };

    const validateCpf = await Patient.findOne({
      where: {
        cpf: request.body.cpf
      }
    })

    if (validateCpf){
      return response.status(409).json( {message: 'This cpf already exists.'})
    }

    const patient = await Patient.create(requestPatient);

    response.status(201).json(patient);
    
  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = createPatient;