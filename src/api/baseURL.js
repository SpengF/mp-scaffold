let baseURL=''
switch(process.env.NODE_ENV){
  case 'prod':
  baseURL = 'your URL'
  break
}
export default {
  baseURL,
}