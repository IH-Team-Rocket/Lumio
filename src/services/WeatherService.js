import createHttp from './BaseService';

const http = createHttp(true)

export const getNowcast = (city) => http.get(`/weather/${city}`);