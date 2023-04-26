const Doctor = require('../../models/doctor');

async function deleteDoctor(request, response){

  try {

    const idDoctor = await Doctor.findByPk(request.params.id);

    if(!idDoctor){
      return response.status(404).json({message: "There's no doctor with this ID." });
    }
    
    await Doctor.destroy({
      where: {
        id: request.params.id
      }
    })

    response.status(204).json({message: "Successfully deleted!"})

  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = deleteDoctor;