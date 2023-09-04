const fs = require('fs');

// Sample first names and last names
const firstNames = [
  'John', 'Jane', 'David', 'Mary', 'Robert',
  'Linda', 'William', 'Patricia', 'James', 'Karen',
  'Michael', 'Susan', 'Richard', 'Nancy', 'Joseph',
  'Betty', 'Charles', 'Lisa', 'Thomas', 'Donna'
];

const lastNames = [
  'Smith', 'Johnson', 'Brown', 'Wilson', 'Anderson',
  'Clark', 'Lee', 'Harris', 'Turner', 'Hall',
  'White', 'Martin', 'Martinez', 'Allen', 'Young',
  'Rodriguez', 'Lewis', 'Scott', 'Baker', 'Taylor'
];

// Sample medical histories
const sampleMedicalHistories = [
  'Hypertension', 'Diabetes', 'Asthma', 'Arthritis', 'High Cholesterol',
  'Migraine', 'Depression', 'Anxiety', 'Obesity', 'Allergies'
];

// Function to shuffle an array randomly
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Generate shuffled lists of first names and last names
const shuffledFirstNames = shuffleArray(firstNames);
const shuffledLastNames = shuffleArray(lastNames);

// Function to generate random patient data
function generateRandomPatient(id) {
  // Generate a random medical history
  const randomHistory = sampleMedicalHistories[Math.floor(Math.random() * sampleMedicalHistories.length)];

  // Combine shuffled first name and last name
  const randomName = `${shuffledFirstNames[id % 20]} ${shuffledLastNames[id % 20]}`;

  // Generate a random gender and current condition
  const genders = ['Male', 'Female'];
  const conditions = ['Stable', 'Critical'];
  const randomGender = genders[Math.floor(Math.random() * genders.length)];
  const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];

  // Generate vital signs data
  const heartRate = Math.floor(Math.random() * (120 - 60 + 1)) + 60;
  const systolic = Math.floor(Math.random() * (140 - 100 + 1)) + 100;
  const diastolic = Math.floor(Math.random() * (90 - 60 + 1)) + 60;
  const temperature = parseFloat((Math.random() * (98.6 - 100.4) + 98.6).toFixed(1));
  const respiratoryRate = Math.floor(Math.random() * (20 - 12 + 1)) + 12;

  const randomizedPatient = {
    id,
    name: randomName,
    age: Math.floor(Math.random() * (90 - 18 + 1)) + 18,
    gender: randomGender,
    medicalHistory: randomHistory,
    currentCondition: randomCondition,
    vitalSigns: {
      heartRate,
      bloodPressure: `${systolic}/${diastolic}`,
      temperature,
      respiratoryRate,
    },
  };

  return randomizedPatient;
}

// Generate data for 100 random patients
function generateRandomPatients() {
  const patients = [];
  for (let i = 1; i <= 100; i++) {
    patients.push(generateRandomPatient(i));
  }
  return patients;
}

// Generate the random patient data
const randomPatients = generateRandomPatients();

// Create a JSON object containing the random patient data
const data = {
  patients: randomPatients,
};

// Write the data to a JSON file
fs.writeFileSync('unique_patient_data.json', JSON.stringify(data, null, 2));

console.log(`Generated data for 100 unique patients.`);
