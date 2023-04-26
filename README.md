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

![imagem25](https://user-images.githubusercontent.com/105654178/234614284-7f015fa9-14f7-4de9-b069-6f973d5eec35.png)

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

![image1](https://user-images.githubusercontent.com/105654178/234607299-1d8c5ba4-41a3-4c7e-a0b3-74591d324a4e.png)


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
![image2](https://user-images.githubusercontent.com/105654178/234610721-a2acf6fe-f689-43b3-aa12-0148244e202e.png)

### **PATIENT**

1. We will now start the application in order of construction of the exercises. The first request starts with the **Patient** and the HTTP Request is **POST** which creates the registration of the patients:

```
http://localhost:3636/api/patients
```

<p>To make it work as expected, you must change the request to POST and in the body select the JSON option. Then you will need to insert the record, send the request and the expected output will be like the one in the image:</p>

![imagem3](https://user-images.githubusercontent.com/105654178/234611333-90dd1446-9ec9-4337-9dca-53f3df2aaf76.png)

In the part of service_status, you can just rigth the options: **"WAITING_FOR_SERVICE"**, **"IN_ATTENDANCE"**, **"ATTENDED"** or **"NOT_ATTENDED"**. We will not use the total_of_service at this moment. 

2. Now we will use the **PUT**, it will serve to **update** the registration of patients by id without the service_status and total_of_service like the image:

```
http://localhost:3636/api/patients/:id
```
![Imagem4](https://user-images.githubusercontent.com/105654178/234611525-36f1019b-9020-487b-bf6e-affe4cda5417.png)

3. Now the **PUT** will serve to update the service_status:

```
http://localhost:3636/api/patients/:id/status
```
![Imagem5](https://user-images.githubusercontent.com/105654178/234611743-574d346f-dfdd-4126-bdf2-b22a45f15114.png)

**REMEMBER**: you can only use **"WAITING_FOR_SERVICE"**, **"IN_ATTENDANCE"**, **"ATTENDED"** or **"NOT_ATTENDED"**.

4. You can find all your patients or just the patient with the desired service_status using the query parameters. To do this, you have to use **GET** and use one of the options below:

```
http://localhost:3636/api/patients/
```
![IMAGEM6](https://user-images.githubusercontent.com/105654178/234611852-12183821-6f7f-4b02-a542-46da3939740a.png)

```
http://localhost:3636/api/patients?service_status=NOT_ATTENDED
```
![IMAGEM7](https://user-images.githubusercontent.com/105654178/234612107-2fb0a901-6c96-4140-b619-1adab4939a88.png)

5. It is also possible to find a specific Patient using they ID in **GET**:

```
http://localhost:3636/api/patients/:id
```
![imagem8](https://user-images.githubusercontent.com/105654178/234612184-fe877ea6-c812-42e6-919f-2619f5bd746d.png)

6. To delete a Patient you must select the **DELETE** request and specify the id of the registered patient.

```
http://localhost:3636/api/patients/:id
```
![imagem9](https://user-images.githubusercontent.com/105654178/234612358-e8a84348-f697-4ed9-a6c1-1f0a7c239b78.png)

<br>

### **DOCTOR**
1. Like the Patient, we are going to start creating a register for the **Doctor** using the **POST** request:

```
http://localhost:3636/api/doctors
```
<br>

In this request you may or may not enter the system_state (if you want to use that, you can only use **"ACTIVE"** or **"INACTIVE"** as options), but you have to use just this options for the specialization: **"GENERAL_PRACTITIONE"**, **"ANESTHETIST"** , **"DERMATOLOGY"**, **"GYNECOLOGY"**, **"NEUROLOGY"**, **"PEDIATRICS"**, **"PSYCHIATRY"**, **"ORTHOPEDICS"**. 
![IMAGEM10](https://user-images.githubusercontent.com/105654178/234612636-f205b128-dde7-45d3-874c-f2a47b8c18e1.png)


**Note:** if nothing is entered in system_state, the doctor will be registered as **ACTIVE**.

2. To update the doctor's data you must use the **PUT** request and the doctor's ID:

```
http://localhost:3636/api/doctors/:id
```
![imagem11](https://user-images.githubusercontent.com/105654178/234612763-b4aae357-4bef-4011-8a77-edb46eed7409.png)

3. To update the doctor's **STATUS** you must use the **PUT** request, the doctor's ID and enter the system_state only with the options **"ACTIVE "** or **"INACTIVE**:
```
http://localhost:3636/api/doctors/:id/status
```
![imagem12](https://user-images.githubusercontent.com/105654178/234612852-4e85d2ee-b6d1-4838-baba-af4a2ae4a9cf.png)

4. It's possible find all your doctors or just the doctor with the desired system_state using the query parameters. To do this, you have to use **GET** and use one of the options below:
```
http://localhost:3636/api/doctors/
```
![IMAGEM13](https://user-images.githubusercontent.com/105654178/234612953-e4f9e43c-cac3-4352-9d87-68109a5c42ed.png)
<br>

```
http://localhost:3636/api/doctors?system_state=INACTIVE
```
![imagem14](https://user-images.githubusercontent.com/105654178/234613152-b5d82233-94b7-4e25-a976-1f0764aa1053.png)

5. To find a specific doctor, you can use **GET** and the doctor's ID:
```
http://localhost:3636/api/doctors/:id
```
![imagem15](https://user-images.githubusercontent.com/105654178/234613242-a0a6ffed-a67d-4870-80be-06b3a35393e2.png)

6. To delete some doctor, you can use the **DELETE** request and the doctor's ID:
```
http://localhost:3636/api/doctors/:id
```
![imagem16](https://user-images.githubusercontent.com/105654178/234613450-08be445f-27ea-4138-8838-1e138d1d7e35.png)
<br>

### **NURCE**
1. Like the others, we are going to start creating a register for the **Nurce** using the **POST** request:

```
http://localhost:3636/api/nurces
```
![imagem17](https://user-images.githubusercontent.com/105654178/234613525-e477d439-eb41-4f4d-84fe-c1343a447373.png)

2. To update the nurce's data you must use the **PUT** request and the nurce's ID:

```
http://localhost:3636/api/nurces/:id
```
![imagem18](https://user-images.githubusercontent.com/105654178/234613629-f7d37bdf-4cc8-4684-a3d0-ed43d6fce1d0.png)

3. To find all the nurces, you can use **GET**:
```
http://localhost:3636/api/nurces
```
![imagem19](https://user-images.githubusercontent.com/105654178/234613760-00acf8ad-ae56-4ed7-bcaa-e643e69031ef.png)

4. To find a specific nurce, you can use **GET** and the nurces's ID:
```
http://localhost:3636/api/nurces/:id
```
![imagem20](https://user-images.githubusercontent.com/105654178/234613854-16428b5c-af2e-4941-bcac-a4c40ff060d7.png)

5. To delete some nurce, you can use the **DELETE** request and the nurce's ID:
```
http://localhost:3636/api/nurces/:id
```
![imagem21](https://user-images.githubusercontent.com/105654178/234613905-9a0b8f8a-9491-4a53-ab31-e2fcb239cdaa.png)
<br>

### **ATTENDANCE**
1. This part connects all the doctor's and patient's care. Remember that we didn't change their care in any of the requisitions? That's because we have this part that will help you see which doctor has already attended, who attended and how many attended, the patient will also have updated his service (who attended and if already attended). Using the **POST** in the request follow the instructions: 
```
http://localhost:3636/api/attendances
```
![IMAGEM22](https://user-images.githubusercontent.com/105654178/234613992-f3531e23-f04e-4937-aebd-a2073f80d4ec.png)

**NOTE:** In the example the doctor and patient id 6 was chosen, now see that the doctor's total_appointments and the patient's total_of_service have changed, as has the patient's service_status:

![imagem23](https://user-images.githubusercontent.com/105654178/234614063-7dadf76f-f6bb-48ec-9611-78ae7d98c1fd.png)

<br>

![imagem24](https://user-images.githubusercontent.com/105654178/234614159-2a5b83ed-ec7f-41f5-8d00-84f99c4fd1a6.png)

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
