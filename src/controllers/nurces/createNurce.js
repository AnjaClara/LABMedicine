const Nurce = require('../../models/nurce');

async function createNurce(request, response){

  try {

    const requestNurce = {

      full_name: request.body.full_name,
      gender: request.body.gender,
      date_of_birth: request.body.date_of_birth,
      cpf: request.body.cpf,
      phone_number: request.body.phone_number,
      educational_institution: request.body.educational_institution,
      cofenuf_registation: request.body.cofenuf_registation,

    }

    if (!requestNurce.full_name){
      return response.status(400).json({message: "Please fill in the full name field."});
    }    

    if (!requestNurce.date_of_birth){
      return response.status(400).json({message: "Please fill in the date of birth field."});
    }

    if (!requestNurce.cpf){
      return response.status(400).json({message: "Please fill in the cpf field."});
    }

    if (!requestNurce.cofenuf_registation){
      return response.status(400).json({message: "Please fill in the CRM/UF registation field."});
    }

    const validateCpf = await Nurce.findOne({
      where: {
        cpf: request.body.cpf
      }
    })

    const validateCofen = await Nurce.findOne({
      where: {
        cofenuf_registation: request.body.cofenuf_registation
      }
    })

    if (validateCpf || validateCofen){
      return response.status(409).json( {message: 'This cpf  or COFEN/UF already exists.'})
    }

    const nurce = await Nurce.create(requestNurce);

    response.status(201).json(nurce);
    
  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = createNurce;