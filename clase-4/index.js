import { fromEvent } from 'https://dev.jspm.io/rxjs@6/_esm2015';

let inputValue = {
    entrada: ''
}
const input = document.querySelector('input[name="entrada"]');
const output = document.querySelector('input[name="salida"]');

const observable = fromEvent(input, 'input')

const backwards = str => str.split("").reverse().join("");

const subs = observable.subscribe( event => {
    console.log(event)
    inputValue = {
        ...inputValue,
        [event.path[0].name]: event.path[0].value,
        [output.name]: event.path[0].value.split("").reverse().join("")
    }

    if(inputValue.entrada === 'error') {
        subs.error('Se ingresó la palabra error')
    }

    if(inputValue.entrada === 'complete') {
        subs.complete()
    }
    output.value = inputValue.salida

    setTimeout(() => {
        subs.unsubscribe();
        clean();
    }, 30000)
}, error => {
    console.log(error)
}, () => {
    console.log('Se ingresó la palabra complete')
})

const clean = () => {
    inputValue = {
        entrada: '',
        salida: ''
    }
    input.value = '',
    output.value = ''
}
