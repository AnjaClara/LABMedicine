const Attendance = require('../../models/attendance');
const Doctor = require('../../models/doctor');
const Patient = require('../../models/patient');

async function createAttendance(request, response){

  try {

    const attendanceData = request.body;

    if(!attendanceData.id_patient){
      return response.status(400).json({message: "Patient ID is mandatory!"});
    }

    if(!attendanceData.id_doctor){
      return response.status(400).json({message: "Doctor ID is mandatory!"});
    }

    const patient = await Patient.findByPk(attendanceData.id_patient);

    if(!patient){
      return response.status(404).json({message: "This patient does not exist in the system..."});
    }

    const doctor = await Doctor.findByPk(attendanceData.id_doctor);
    
    if(!doctor){
      return response.status(404).json({message: "This doctor does not exist in the system..."});
    }

    if(doctor.system_state === "INACTIVE"){
      return response.status(400).json({message: "This doctor is inactive."})
    }

    patient.total_of_service++;
    patient.service_status = "ATTENDED";
    await patient.save();
    
    doctor.total_appointments++;
    await doctor.save();


    const attendances = await Attendance.create(attendanceData);

    await attendances.setPatient(patient);
    await attendances.setDoctor(doctor);

    response.status(200).json(attendances);
    
  } catch (error) {
    response.status(400).json( {message: 'Unable to process your application...'});
  }

}

module.exports = createAttendance;