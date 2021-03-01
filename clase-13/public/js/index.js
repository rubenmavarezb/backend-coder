const socket = io();
console.log('arranca')

const form = document.querySelector('form');
const input = document.querySelector('input');
const mensaje = document.querySelector('span')

form.addEventListener('submit', e => {
    e.preventDefault()
    if(input.value) {
        socket.emit('respuesta', input.value)
        mensaje.innerHTML += `<p style='text-align:right;'>${input.value}</p>`
        input.value = '';
    }
})
mensaje.innerHTML = `<p>${'hola'}</p>`

socket.on('pregunta', pregunta => {
    console.log(pregunta)
    mensaje.innerHTML += `<p style='text-align:left;'>${pregunta}</p>`
})