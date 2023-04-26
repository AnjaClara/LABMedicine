const Doctor = require('../../models/doctor');

async function createDoctor(request, response){

  try {

    const requestDoctor = {

      full_name: request.body.full_name,
      gender: request.body.gender,
      date_of_birth: request.body.date_of_birth,
      cpf: request.body.cpf,
      phone_number: request.body.phone_number,
      educational_institution: request.body.educational_institution,
      crmuf_registation: request.body.crmuf_registation,
      specialization: request.body.specialization,
      system_state: request.body.system_state

    }

    if (!requestDoctor.full_name){
      return response.status(400).json({message: "Please fill in the full name field."});
    }    

    if (!requestDoctor.date_of_birth){
      return response.status(400).json({message: "Please fill in the date of birth field."});
    }

    if (!requestDoctor.cpf){
      return response.status(400).json({message: "Please fill in the cpf field."});
    }

    if (!requestDoctor.crmuf_registation){
      return response.status(400).json({message: "Please fill in the CRM/UF registation field."});
    }

    switch (requestDoctor.specialization) {
      case "GENERAL_PRACTITIONE":
        break;
      case "ANESTHETIST":
        break;
      case "DERMATOLOGY":
        break;
      case "GYNECOLOGY":
        break;
      case "NEUROLOGY":
        break;
      case "PEDIATRICS":
        break;
      case "PSYCHIATRY":
        break;
      case "ORTHOPEDICS":
        break;
      default:
        return response
          .status(404)
          .json({ message: "This specialization does not exist!" });
    };

    const validateCpf = await Doctor.findOne({
      where: {
        cpf: request.body.cpf
      }
    })

    const validateCrm = await Doctor.findOne({
      where: {
        crmuf_registation: request.body.crmuf_registation
      }
    })

    if (validateCpf || validateCrm){
      return response.status(409).json( {message: 'This cpf  or CRM/UF already exists.'})
    }

    const doctor = await Doctor.create(requestDoctor);

    response.status(201).json(doctor);
    
  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = createDoctor;