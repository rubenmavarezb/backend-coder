const socket = io();
console.log('arranca')

const form = document.querySelector('form');
const input = document.querySelector('input');
const mensaje = document.querySelector('span')

form.addEventListener('submit', e => {
    e.preventDefault()
    if(input.value) {
        socket.emit('pregunta', input.value)
        mensaje.innerHTML += `<p style='text-align:right;'>${input.value}</p>`
        input.value = '';
    }
})

socket.on('respuesta', respuesta => {
    mensaje.innerHTML += `<p style='text-align:left;'>${respuesta}</p>`
})