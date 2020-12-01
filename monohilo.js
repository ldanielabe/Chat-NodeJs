//$env:NOMBRE="Carlos"  //por consola
let nombre = process.env.NOMBRE;



/*let i = 0;
setInterval(async function() {
    console.log(i);
    i++;
}, 1000);
*/
// npx nodemon archivo.js

async function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Holi " + nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Bla bla bla.. ");
            resolve("Hay un error");
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Bye " + nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function main() {
    let nombre = await hola("Daniela");
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log("Termina el proceso");

}
console.log("inicio");
main();