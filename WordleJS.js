const WORDS = ["תהילה", "דרינה", "אבטיח", "ישראל", "חופשה", "בדידה", "הייטק", "פנינה", "פרגית", "מרוקו", "גלידה", "מושלם"];
let currentSquareId = 0;

function isCellPainted (id){
    let cellElement = document.getElementById(id);
    return (cellElement.classList[cellElement.classList.length-1] != null)
}

function addALetter(letter){
    if ((currentSquareId == 0) || (currentSquareId % 5 != 0) || isCellPainted(currentSquareId)){
        currentSquareId ++;
        document.getElementById(currentSquareId+"").innerText = letter;
        // document.getElementById(currentSquareId+"").classList.add("wrong");
    }
}

function deleteLetter (){
    if ((currentSquareId != 0) && !isCellPainted(currentSquareId)){
        document.getElementById(currentSquareId+"").innerText = "";
        currentSquareId --;
    }
}

function validInput (){
    if ((currentSquareId != 0) && (currentSquareId % 5 == 0) && !isCellPainted(currentSquareId)){
        for (let i = 0; i < 5; i++) {
            let currentSquare = document.getElementById((currentSquareId-i) + "");
            if (WORDS[0].charAt(4-i) == currentSquare.innerText){
                currentSquare.classList.add("right");
            }else if (WORDS[0].includes(currentSquare.innerText)){
                currentSquare.classList.add("wrongPlace");
            }else currentSquare.classList.add("wrong");
        }
    }
}

// function isLetterExist (letter){
//     for (let i = 0; i < WORDS[0].length; i++) {
//         if (WORDS[0].charAt(i) === letter){
//             return true;
//         }
//     }
//     return false;
// }

function determiningId (){
    let cells = document.getElementsByTagName("td");
    let counter = 1;
    for (let i = 0; i < 6; i++) {
        for (let j = 5; j > 0; j--) {
            cells[(j+(i*5))-1].id = counter;
            counter++;
        }
    }
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].innerText.length == 1){
            buttons[i].id = buttons[i].innerText;
            buttons[i].classList.add("letter");
        }
    }
}