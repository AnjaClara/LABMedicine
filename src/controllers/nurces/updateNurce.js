const Nurce = require('../../models/nurce');

async function updateNurce(request, response){

  try {

    const nurceInDatabase = await Nurce.findByPk(request.params.id);

    if(!nurceInDatabase){
      return response.status(404).json({message: 'Nurce not found!'});
    }

    nurceInDatabase.full_name = request.body.full_name || nurceInDatabase.full_name;
    nurceInDatabase.gender = request.body.gender || nurceInDatabase.gender;
    nurceInDatabase.date_of_birth = request.body.date_of_birth || nurceInDatabase.date_of_birth;
    nurceInDatabase.cpf = request.body.cpf || nurceInDatabase.cpf;
    nurceInDatabase.phone_number = request.body.phone_number || nurceInDatabase.phone_number;
    nurceInDatabase.educational_institution = request.body.educational_institution || nurceInDatabase.educational_institution;
    nurceInDatabase.cofenuf_registation = request.body.cofenuf_registation || nurceInDatabase.cofenuf_registation;
    
    await nurceInDatabase.save();

    response.status(200).json(nurceInDatabase);

  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = updateNurce;