'use strict'
// module.exports = {
//   NODE_ENV: '"production"'
// }
//根据不同环境打包
let buildtype = process.env.env_config
console.log('------------------start------------环境是'+buildtype)
var obj = {
  NODE_ENV:'"production"'
}
switch(buildtype){
  case 'inter'://集成测试
    obj.NODE_ENV = '"integration"'
    break;
  case 'prod'://生产环境
    obj.NODE_ENV = '"production"'
    break;
}

module.exports = obj
