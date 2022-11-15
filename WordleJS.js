let currentSquareId = 0;
let words = ["תהילה", "דרינה", "אבטיח", "ישראל", "חופשה", "בדידה", "הייטק", "פנינה", "פרגית", "מרוקו", "גלידה", "מושלם"];

function isCellPainted (id){
    let cellElement = document.getElementById(id);
    return (cellElement.classList[cellElement.classList.length-1] != "square")
}

function addALetter(letter){
    if ((currentSquareId == 0) || (currentSquareId % 5 != 0) || isCellPainted(currentSquareId)){
        currentSquareId ++;
        document.getElementById(currentSquareId+"").innerText = letter;
        // document.getElementById(currentSquareId+"").classList.add("wrong");
    }
}

function validInput (){
    if ((currentSquareId != 0) && (currentSquareId % 5 == 0) && !isCellPainted(currentSquareId)){
        for (let i = 0; i < 5; i++) {
            let currentSquare = document.getElementById((currentSquareId-i) + "");
            if (words[0].charAt(4-i) == currentSquare.innerText){
                currentSquare.classList.add("right");
            }else if (words[0].includes(currentSquare.innerText)){
                currentSquare.classList.add("wrongPlace");
            }else currentSquare.classList.add("wrong");
        }
    }
}

// function isLetterExist (letter){
//     for (let i = 0; i < words[0].length; i++) {
//         if (words[0].charAt(i) === letter){
//             return true;
//         }
//     }
//     return false;
// }

function deleteLetter (){
    if ((currentSquareId != 0) && !isCellPainted(currentSquareId)){
        document.getElementById(currentSquareId+"").innerText = "";
        currentSquareId --;
    }
}