const net = require('net');

const server = net.createServer(
    (conexion)=>{
        conexion.write("Echo server!!!");
        conexion.pipe(conexion);
    }
);

server.listen(3000,'127.0.0.1');