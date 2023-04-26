require('dotenv').config();
const express = require('express');
const connection = require('./src/database');
const app = express();

app.use(express.json());

connection.authenticate();
connection.sync({alter: true});

// PATIENT
const createPatient = require('./src/controllers/patients/createPatient');
const updatePatient = require('./src/controllers/patients/updatePatient');
const updatePatientStatus = require('./src/controllers/patients/updatePatientStatus');
const findPatients = require('./src/controllers/patients/findPatients');
const findIdPatients = require('./src/controllers/patients/findIdPatients');
const deletePatient = require('./src/controllers/patients/deletePatient');

// DOCTOR
const createDoctor = require('./src/controllers/doctors/createDoctor');
const updateDoctor = require('./src/controllers/doctors/updateDoctor');
const updateDoctorStatus = require('./src/controllers/doctors/updateDoctorStatus');
const findDoctors = require('./src/controllers/doctors/findDoctors');
const findIdDoctors = require('./src/controllers/doctors/findIdDoctors');
const deleteDoctor = require('./src/controllers/doctors/deleteDoctor');

// NURCE
const createNurce = require('./src/controllers/nurces/createNurce');
const updateNurce = require('./src/controllers/nurces/updateNurce');
const findNurces = require('./src/controllers/nurces/findNurces');
const findIdNurces = require('./src/controllers/nurces/findIdNurces');
const deleteNurce = require('./src/controllers/nurces/deleteNurce');

// ATTENDANCE
const createAttendance = require('./src/controllers/attendances/createAttendance');

app.get('/', (request, response) => {
  response.json({message: "Welcome to LABMedicine!"});
});

// PATIENT
app.post('/api/patients', createPatient);
app.put('/api/patients/:id', updatePatient);
app.put('/api/patients/:id/status', updatePatientStatus);
app.get('/api/patients', findPatients);
app.get('/api/patients/:id', findIdPatients);
app.delete('/api/patients/:id', deletePatient);

// DOCTOR
app.post('/api/doctors', createDoctor);
app.put('/api/doctors/:id', updateDoctor);
app.put('/api/doctors/:id/status', updateDoctorStatus);
app.get('/api/doctors', findDoctors);
app.get('/api/doctors/:id', findIdDoctors);
app.delete('/api/doctors/:id', deleteDoctor);

// NURCE
app.post('/api/nurces', createNurce);
app.put('/api/nurces/:id', updateNurce);
app.get('/api/nurces', findNurces);
app.get('/api/nurces/:id', findIdNurces);
app.delete('/api/nurces/:id', deleteNurce);

// ATTENDANCE
app.post('/api/attendances', createAttendance);

app.listen(3636, () => {
  console.log("Online Server");
});