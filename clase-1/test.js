const monoRiel = () => {
    for (let num = 1; num <= 100 ; num++) {
        switch (true) {
            case (num % 3 === 0 && num % 5 === 0):
                console.log('MonoRiel')
                break;
            case (num % 3 === 0):
                console.log('Mono');
                break;
            case (num % 5 === 0):
                console.log('Riel')
                break;
            default:
                console.log(num);
                break;
        }
    }
}

monoRiel();