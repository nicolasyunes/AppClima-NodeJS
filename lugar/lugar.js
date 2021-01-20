const axios = require('axios');
const  argv  = require('../config/yargs').argv


const encondeURL = encodeURI(argv.direccion)

const getLatLng = async (direcc) => {
    const instance = axios.create({
        baseURL:`http://api.openweathermap.org/data/2.5/weather?q=${encondeURL}&appid=f23372d0f3a0f9c4b8064c9d6e6c5966`,
        timeout: 1000,
    })
    
    const resp  = await  instance.get(); 

    if(resp.data.cod===200){
        {   
            const direcc = resp.data.name;
            const lat = resp.data.coord.lat;
            const lng = resp.data.coord.lon;
            
            return(
            {direcc,
            lat,
            lng})
    
        }
    }
    


}


module.exports = {
    getLatLng
}

