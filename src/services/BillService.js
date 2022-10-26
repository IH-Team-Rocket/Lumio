import createHttp from './BaseService';

const http = createHttp(true)

export const getBills = () => http.get('/bills');