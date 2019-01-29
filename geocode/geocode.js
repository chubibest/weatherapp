const request = require('request')
 

var geocodeAddress =(address,callback) => {
   
request ({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyBd-1080cYr856p-UyPz2mCW_nrZ5ajr1w`,
json:true},(error,response,body)=>{
    if (error){
     callback('unable to connect to google servers')
    } 
    else if (body.status === "ZERO_RESULTS"){
        callback('unable to find location')
    }else if (body.status === "OK")
    {callback(undefined,{Address: body.results[0].formatted_address,
    Longitude: body.results[0].geometry.location.lng,
    Latitude: body.results[0].geometry.location.lat })}
})
}

module.exports= {
    geocodeAddress
}
