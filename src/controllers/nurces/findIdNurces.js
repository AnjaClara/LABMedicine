const Nurce = require('../../models/nurce');

async function findIdNurces(request, response){

  try {
    
    const idNurce = await Nurce.findByPk(request.params.id);

    if (idNurce){
      return response.status(200).json(idNurce);
    } else {
      return response.status(404).json({message: 'Nurce not found!'});
    }

  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = findIdNurces;