const argv = require('./config/yargs').argv
const clima = require('./clima/clima')
const lugar = require('./lugar/lugar')

// lugar.getLatLng(argv.direccion).then((res) => console.log(res))
// .catch((err)=>{
//     console.log(`Error nombre de ciudad ${argv.direccion} no encontrada`);
// })


// clima.getClima()
// .then(console.log)
// .catch(console.log)


const getInfo = async (direccion) =>{

    try {

        const coords = await  lugar.getLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng)

        return `el clima de ${coords.direcc} tiene la temperatura de  ${temp}`


    } catch (error) {
        return 'No se pudo determinar el clima '
    }
}


getInfo(argv.direccion)
.then(console.log)
.catch(console.log)