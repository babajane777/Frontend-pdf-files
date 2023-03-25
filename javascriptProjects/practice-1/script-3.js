const time = new Date();
const hours = time.getHours();
const min = time.getMinutes();
const sec = time.getSeconds();
var Time = hours + ":" + min + ":" + sec;
console.log(Time);