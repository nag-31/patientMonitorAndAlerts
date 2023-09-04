import axios from 'axios';

const API_BASE_URL = 'http://localhost:3002'; // Replace with your API base URL

export const fetchPatients = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/patients`);
    return response.data;
  } catch (error) {
    // Handle error here, e.g., log or show an error message
    console.error('Error fetching patients:', error);
    return [];
  }
};
export const fetchPatientById = async (patientId) => {
  try {
    // Make a GET request to the specific patient's endpoint using the patientId
    const response = await axios.get(`${API_BASE_URL}/patients/${patientId}`);
    return response.data;
  } catch (error) {
    // Handle error here, e.g., log or show an error message
    console.error('Error fetching patient by ID:', error);
    throw error;
  }
};

export const createPatient = async (newPatient) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/patients`, newPatient);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error('Error creating patient:', error);
    throw error;
  }
};

export const updatePatient = async (patientId, updatedPatient) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/patients/${patientId}`, updatedPatient);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error('Error updating patient:', error);
    throw error;
  }
};

export const deletePatient = async (patientId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/patients/${patientId}`);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error('Error deleting patient:', error);
    throw error;
  }
};

// You can also add the threshold related methods here if needed

export const fetchThreshold = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/threshold`);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error('Error fetching threshold data:', error);
    return [];
  }
};
export const fetchThresholds = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/thresholds`);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error('Error fetching threshold data:', error);
    return [];
  }
};

export const updateThreshold = async (thresholdData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/threshold`, thresholdData);
    return response.data;
  } catch (error) {
    console.error('Error updating threshold values:', error);
    throw error;
  }
};

export const togglePatientCondition = async (patientId) => {
  try {
    // Fetch the patient details
    const response = await axios.get(`${API_BASE_URL}/patients/${patientId}`);
    const patient = response.data;

    // Toggle the current condition
    const updatedCondition = patient.currentCondition === "Stable" ? "Critical" : "Stable";

    // Create a new patient object with the updated condition
    const updatedPatient = { ...patient, currentCondition: updatedCondition };
    console.log(updatedPatient);
    // Use the POST method to update the patient
    const postResponse = await axios.put(`${API_BASE_URL}/patients/${patientId}`, updatedPatient);

    return postResponse.data;
  } catch (error) {
    console.error('Error toggling patient condition: inside api', error);
    throw error;
  }
};


// ... (your existing API code)

export const updatePatientCondition = async (patientId, newCondition) => {
  try {
    // Fetch the patient details
    const response = await axios.get(`${API_BASE_URL}/patients/${patientId}`);
    const patient = response.data;

    // Update the current condition with the new condition
    patient.currentCondition = newCondition;

    // Use the POST method to update the patient
    const postResponse = await axios.post(`${API_BASE_URL}/patients/${patientId}`, patient);

    return postResponse.data;
  } catch (error) {
    console.error('Error updating patient condition:', error);
    throw error;
  }
};

export const checkDocExists = async (username, password) => {
  try {
    // Send a GET request to fetch user data
    const response = await axios.get(`${API_BASE_URL}/doctors`);
    const users = response.data;

    // Check if the user exists based on the provided username and password
    const userExists = users.some(user => user.username === username && user.password === password);

    return userExists;
  } catch (error) {
    throw error; // Handle errors in your component
  }
};
