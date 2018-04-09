// requires
const argv = require('./config/yargs').argv;

// const colors = require('colors');
const colors = require('colors/safe');

// const multiplicar = require('./multiplicar/multiplicar');
const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar');

// let base = '5';
// console.log(process.argv);
/*let argv2 = process.argv;
let parametro = argv[2];*/
// console.log(parametro);

// console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log(argv.base, argv.limite);
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log('Archivo creado:', colors.green(archivo) ))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

