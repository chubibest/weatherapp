const request =require('request')
const getweather = (lat, lng, callback)=>{
request(
{
    url:`https://api.darksky.net/forecast/b54e29a636089899c96dfea318d5c63a/${lat},${lng}`,
    json:true
},(error, response, body)=>{
   if(!error && response.statusCode===200){
    callback(undefined ,`its is ${body.currently.temperature} degrees, but it sure feels like ${body.currently.apparentTemperature}`)
   }else{
     callback('Unable to get current temperature')
   }

}
)}
module.exports.getweather = getweather