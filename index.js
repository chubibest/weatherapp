const geocode = require ( './geocode/geocode')
const weather = require ('./weather/weather.js')
const yargs = require ('yargs')
const argv = yargs.options({
    a:{
        demand:true,
        alias:'address',
        describe:'Address to fetch weather for',
        string:true
    }
}).help().alias('help','h').argv;

console.log(argv.a)
console.log(encodeURIComponent(argv.a))
geocode.geocodeAddress(argv.a,(errorMessage, result)=>{
    if(errorMessage){
        console.log(errorMessage)
    }
    if (result){
        console.log(result.Address)
   weather.getweather(result.Latitude,result.Longitude-122.4233,(errorMessage,wresults)=>{
      if (errorMessage){
         console.log(errorMessage)
      }
      if (wresults){
         console.log(JSON.stringify(wresults))
      }
      })
    }
})


