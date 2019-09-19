const net = require('net');

const client = new net.Socket();

client.connect(
    3000 , 
    '127.0.0.1' , 
    ()=>{
        console.log('Soket Conectado Correctamente.');
    }
);

//Primer parametro es el nombre del evento que vamos a recibir
//Segundo es la funcion callback que se va a ejecutar
client.on(
    'data',
    (data)=>{
        //console.log('Info : ' + data);
        //Interpolacion de cadenas con ES6 es mas facil para el sistema operativo hacer interpolacion
        //que juntar dos cadenas
        console.log(`Info ${data}`);
        client.destroy();
    }
)

client.on(
    'close',
    ()=>{
        console.log('Se ha cerrado la conexion.');
    }
)