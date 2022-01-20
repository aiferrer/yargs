
const {crearArchivo} = require('./tabla');
const color = require('colors');
const args = require('yargs').argv;

if (args.base) {
    crearArchivo(args.base)
    .then( nombreArchivo => console.log(`Se ha creado el archivo ${nombreArchivo}`)
    )
    .catch(e => console.log('ERROR: '.red + e));
}
else{
    return console.log('ERROR: '.red + 'Debe escribir un comando que contenga el argumento base: Ej --base=2' )
}
