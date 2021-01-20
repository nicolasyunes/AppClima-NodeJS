const axios = require('axios');

const getClima =async ( lat,lng ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f8b36bcc63ce1516dbba9cf684beb3d0&units=metric`)
    
    return resp.data.main.temp
}

module.exports = {
    getClima
}