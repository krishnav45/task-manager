import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'https://task-manager-2xhv.onrender.com';

export const getTasks = (params) => axios.get(`${BASE_URL}/api/tasks`, { params });
export const getTask = (id) => axios.get(`${BASE_URL}/api/tasks/${id}`);
export const createTask = (data) => axios.post(`${BASE_URL}/api/tasks`, data);
export const updateTask = (id, data) => axios.put(`${BASE_URL}/api/tasks/${id}`, data);
export const deleteTask = (id) => axios.delete(`${BASE_URL}/api/tasks/${id}`);