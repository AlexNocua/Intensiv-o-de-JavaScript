//http: es una forma de cominacion por medio de la internet

const http = require('http');//recursos de node.js estructura de jt

//express recurso de erramientas para la coneccion de un codigo http


const express = require('express'); //el es una funcion ejecutable
const app = express();//funcion ejecutada 

const servidorHttp = http.createServer(app);

const io = require('socket.io')(servidorHttp);//npm organizador de paquetes de funcionalidades para el proyecto 


//funcion de comportamiento
//esta misma es el addeventlistener con el paquete de ferramentas do socket
io.addListener('connection', (socket) => {
    console.log('Um usuario conectou');
    //event in socker

    //todo mundo va a escuchar nuestro mensaje
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    })

})

/*
   Esto tenermos que instalarlo con:
   npm install socket.io
   */

//crecion de funciones anonimas
/*
(){
    return
}
 

// forma diferente de escribir una fiuncion
//Arrow function 
() => {
return
}

//arrow function whit name

/*
const fazerbolo = () => {
return
}

fazerBolo()
*/



//divicion de predios
//ports 
app.use(express.static('public'))
//en mi aplicacion puedes utilizar los recursos estaticos de la carpeta public


//node --watch .\servidor.js comando para ejecutar 
servidorHttp.listen(1000,'10.157.17.35');
// escuchar en la puerta mil


//websocked canal de comunicacion entre las personas que que accedan al servidor



//servidor configurado aplicacion dd backend rodado en node js por medio del terminal

/*comandos por consola para rodar el servidor
node ./servidor.js= para ejecutar el servidor
node --watch ./servidor.js= para ejecutar pero al generar culaquier cambio
reinicie el servidor de manera automatica.

*/
