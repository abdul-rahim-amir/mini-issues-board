// src/services/issues.js
import API from "../api";

export const getIssues = () => API.get("/issues");
export const createIssue = (data) => API.post("/issues", data);
export const updateIssue = (id, data) => API.put(`/issues/${id}`, data);
export const deleteIssue = (id) => API.delete(`/issues/${id}`);
