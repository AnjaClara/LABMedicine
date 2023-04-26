const Nurce = require('../../models/nurce')

async function findNurces(request, response){

  try{
    
    const allNurces = await Nurce.findAll();
    response.status(200).json(allNurces);

  }catch(error){
    response.status(400).json( {message: 'Unable to process your application...'});
  }
    
};

module.exports = findNurces;