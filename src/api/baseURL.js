let baseURL = 'http://www.默认地址.com'
switch(process.env.NODE_ENV){
  case 'development':
    baseURL = 'http://www.development.com'
    break;
  case 'production':
    baseURL = 'http://www.production.com'
    break;
  case 'integration':
    baseURL = 'http://www.integration.com'
    break;
}
export default {
  baseURL,
}