const Nurce = require('../../models/nurce');

async function deleteNurce(request, response){

  try {

    const idNurce = await Nurce.findByPk(request.params.id);

    if(!idNurce){
      return response.status(404).json({message: "There's no nurce with this ID." });
    }
    
    await Nurce.destroy({
      where: {
        id: request.params.id
      }
    })

    response.status(204).json({message: "Successfully deleted!"})

  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = deleteNurce;