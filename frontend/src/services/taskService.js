import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/tasks';

export const getTasks = (params) => axios.get(API_URL, { params });
export const getTask = (id) => axios.get(`${API_URL}/${id}`);
export const createTask = (data) => axios.post(API_URL, data);
export const updateTask = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);