# 👩🏻‍⚕️ MedicalData - LABMedicine

<p>This project is based on a challenge from Dev. FullStack module 1 that taught how to use JavaScript, Node.js, Express and SQL to create an API. In this case, the project was based on a database for patients, doctors and nurses in a hospital that keeps track of the progress of their attendance.</p>
<br>
<p>Thus, this programming solves the problem of user data (patients, doctors and nurses) that can help in the communication between the doctor/nurse and the patient by knowing who is attending/being attended to, how many times this attendance has occurred between some doctor and some patient, and some medical data of the patient so that the doctors and nurses take more care at the time of attendance.</p>
<br>

## 📝 Table of contents:

- [How to install and run the project?](#💻-installation)
  - [Pre-requisites](#pre-requisites)
  - [Running](#running)
  - [Start](#start)
- [How to use the project?](#⁉️-how-to-use)
  - [Patient](#patient)
  - [Doctor](#doctor)
  - [Nurce](#nurce)
  - [Attendance](#attendance)
- [Which technologies were used?](#👩🏻‍💻-technologies-used)
- [Which improvements can be made?](#💯-improvements)
- [Thanks](#❤️-gratitudes)

## 💻 Installation

### **Pre-requisites:**
<br>

Before you start, you need the following tools: a code program (example: [VSCode](https://code.visualstudio.com/)), [Node.js](https://nodejs.org/en), [Git](https://github.com/), [pgAdmin](https://www.pgadmin.org/) and [Insomnia](https://insomnia.rest/download) or [Postman](https://www.postman.com/).
<br>

### **Running:**
<br>
<p>To make the API run as expected follow the instructions:</p>
<br>

1. Open your pgAdmin and create a database called **labmedicinebd**:
# IMAGEM 25

2. Create a folder and clone the repository into it:

```
$ mkdir <FOLDERNAME>
```

```
$ cd <FOLDERNAME>
```

```
$ git clone https://github.com/AnjaClara/LABMedicine.git
```
3. Open the project with VSCode:

```
$ code .
```
4. Open your project's terminal in VSCode and perform the following installations:

```
$ npm init -y
```

```
$ npm install express
```

```
$ npm install sequelize
```

```
$ npm install pg pg-hstore
```

```
$ npm install dotenv
```

```
$ npm install nodemon
```
<br>

### **Start:**

<p>To start the API simply, you need to follow these steps:</p>

1. Open the file package.json
2. Inside the file put the following under "test" as shown in the image

```
"start": "nodemon index.js"
```

<div align="center">
  <img src="![image1](https://user-images.githubusercontent.com/105654178/234607299-1d8c5ba4-41a3-4c7e-a0b3-74591d324a4e.png)" width="100px">
</div>

3. Finally, run the following command in the project terminal:

```
$ npm start
```

<p></p>

## ⁉️ How to use
### Follow these steps to see how the API works:
<br>
Open the insomnia and put this URL everytime before you path like the image:

```
http://localhost:3636
```
# IMAGE - 2

### **PATIENT**

1. We will now start the application in order of construction of the exercises. The first request starts with the **Patient** and the HTTP Request is **POST** which creates the registration of the patients:

```
http://localhost:3636/api/patients
```

<p>To make it work as expected, you must change the request to POST and in the body select the JSON option. Then you will need to insert the record, send the request and the expected output will be like the one in the image:</p>

# IMAGEM -3 

In the part of service_status, you can just rigth the options: **"WAITING_FOR_SERVICE"**, **"IN_ATTENDANCE"**, **"ATTENDED"** or **"NOT_ATTENDED"**. We will not use the total_of_service at this moment. 

2. Now we will use the **PUT**, it will serve to **update** the registration of patients by id without the service_status and total_of_service like the image:

```
http://localhost:3636/api/patients/:id
```
# IMAGEM 4

3. Now the **PUT** will serve to update the service_status:

```
http://localhost:3636/api/patients/:id/status
```
# IMAGEM 5
<br>

**REMEMBER**: you can only use **"WAITING_FOR_SERVICE"**, **"IN_ATTENDANCE"**, **"ATTENDED"** or **"NOT_ATTENDED"**.

4. You can find all your patients or just the patient with the desired service_status using the query parameters. To do this, you have to use **GET** and use one of the options below:

```
http://localhost:3636/api/patients/
```
# IMAGEM -6 
<br>

```
http://localhost:3636/api/patients?service_status=NOT_ATTENDED
```
# IMAGEM - 7

5. It is also possible to find a specific Patient using they ID in **GET**:

```
http://localhost:3636/api/patients/:id
```
# IMAGEM 8

6. To delete a Patient you must select the **DELETE** request and specify the id of the registered patient.

```
http://localhost:3636/api/patients/:id
```

# IMAGEM 9
<br>

### **DOCTOR**
1. Like the Patient, we are going to start creating a register for the **Doctor** using the **POST** request:

```
http://localhost:3636/api/doctors
```
<br>

In this request you may or may not enter the system_state (if you want to use that, you can only use **"ACTIVE"** or **"INACTIVE"** as options), but you have to use just this options for the specialization: **"GENERAL_PRACTITIONE"**, **"ANESTHETIST"** , **"DERMATOLOGY"**, **"GYNECOLOGY"**, **"NEUROLOGY"**, **"PEDIATRICS"**, **"PSYCHIATRY"**, **"ORTHOPEDICS"**. 
# IMAGEM 10
<br>

**Note:** if nothing is entered in system_state, the doctor will be registered as **ACTIVE**.

2. To update the doctor's data you must use the **PUT** request and the doctor's ID:

```
http://localhost:3636/api/doctors/:id
```
# IMAGEM 11

3. To update the doctor's **STATUS** you must use the **PUT** request, the doctor's ID and enter the system_state only with the options **"ACTIVE "** or **"INACTIVE**:
```
http://localhost:3636/api/doctors/:id/status
```
# IMAGEM 12

4. It's possible find all your doctors or just the doctor with the desired system_state using the query parameters. To do this, you have to use **GET** and use one of the options below:
```
http://localhost:3636/api/doctors/
```
# IMAGEM - 13
<br>

```
http://localhost:3636/api/doctors?system_state=INACTIVE
```
# IMAGEM - 14

5. To find a specific doctor, you can use **GET** and the doctor's ID:
```
http://localhost:3636/api/doctors/:id
```
# IMAGEM - 15

6. To delete some doctor, you can use the **DELETE** request and the doctor's ID:
```
http://localhost:3636/api/doctors/:id
```
# IMAGEM - 16
<br>

### **NURCE**
1. Like the others, we are going to start creating a register for the **Nurce** using the **POST** request:

```
http://localhost:3636/api/nurces
```
# IMAGEM - 17

2. To update the nurce's data you must use the **PUT** request and the nurce's ID:

```
http://localhost:3636/api/nurces/:id
```
# IMAGEM 18

3. To find all the nurces, you can use **GET**:
```
http://localhost:3636/api/nurces
```
# IMAGEM - 19

4. To find a specific nurce, you can use **GET** and the nurces's ID:
```
http://localhost:3636/api/nurces/:id
```
# IMAGEM - 20

5. To delete some nurce, you can use the **DELETE** request and the nurce's ID:
```
http://localhost:3636/api/nurces/:id
```
# IMAGEM - 21
<br>

### **ATTENDANCE**
1. This part connects all the doctor's and patient's care. Remember that we didn't change their care in any of the requisitions? That's because we have this part that will help you see which doctor has already attended, who attended and how many attended, the patient will also have updated his service (who attended and if already attended). Using the **POST** in the request follow the instructions: 
```
http://localhost:3636/api/attendances
```
# IMAGEM - 22

**NOTE:** In the example the doctor and patient id 6 was chosen, now see that the doctor's total_appointments and the patient's total_of_service have changed, as has the patient's service_status:
# imagem 23
# imagem 24
<br>

## 👩🏻‍💻 Technologies 
- JavaScript;
- Node.js;
- Express.js;
- SQL (Sequelize);

## 💯 Improvements

<p>To improve my API, it is necessary to implement HTML and CSS coding for display on web pages and token protection for storing user data. At this point, I believe that these improvements are not necessary for what the challenge asks for.</p>

## ❤️ Gratitudes

<p>I would like to thank initially the FloripaMaisTec program for the opportunity to study something that I want to take to my professional life forever in a free way. I would also like to thank SENAI and LAB365 for offering a course so rich in knowledge for people with a thirst for learning. Finally, I would like to thank mainly the teachers for all the patience, willingness to teach, and time dedicated to the students and the course.</p>
