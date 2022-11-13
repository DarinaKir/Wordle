function addALetter(letter){
    let isAdd =false;

    for (let i = 1; i < 7 && !isAdd; i++) {
        for (let j = 1; j < 6  && !isAdd; j++) {
            let element1 = document.getElementById(i+''+j);
            if (element1.innerText === ''){
                element1.innerText = letter;
                isAdd = true;
            }
        }
    }
}