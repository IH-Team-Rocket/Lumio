import createHttp from './BaseService';

const http = createHttp(true)

export const getCurrentUser = () => http.get('/users/profile');

export const createUser = (body) => http.post('/users', body);