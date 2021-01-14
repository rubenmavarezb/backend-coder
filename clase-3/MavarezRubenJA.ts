import {Promise} from 'es6-promise'

const end = (id: number, total: number) => {
    clearInterval(id)
    console.log(`End. the total words were ${total} words`)
}

const showWords = (str: string, func: Function, time: number = 1000) => {
    const words = str.split(' ');
    let i = 0
    return new Promise((res, rej) => {
        const id = setInterval(() => {
            (!(i < words.length)) && func(id, i);
            console.log(words[i++])
        }, time)
    })

}


showWords('Hola, como estas?', end).then(res => console.log(res));
showWords('Ayer perdió Boca :(?', end, 5000).then(res => console.log(res))

