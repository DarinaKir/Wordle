const WORDS = ["תהילה", "דרינה", "אבטיח", "ישראל", "חופשה", "בדידה", "הייטק", "פנינה", "פרגית", "מרוקו",
                "גלידה", "מושלם", "שגיאה", "נסיכה", "כימיה", "חנוכה", "ציפור", "משוגע", "אריות", "מכללה"];
let currentSquareId = 0;
let wordIndex = 0;
let isGameOver = false;

function isCellPainted (id){
    let cellElement = document.getElementById(id);
    return (cellElement.classList[cellElement.classList.length-1] != "square")
}

function addALetter(letter){

    if (((currentSquareId == 0) || (currentSquareId % 5 != 0) || isCellPainted(currentSquareId)) && !isGameOver){
        currentSquareId ++;
        document.getElementById(currentSquareId+"").innerText = letter;
    }
}

function deleteLetter (){
    if (((currentSquareId != 0) && !isCellPainted(currentSquareId)) && !isGameOver){
        document.getElementById(currentSquareId+"").innerText = "";
        currentSquareId --;
    }
}

function validInput (){
    if (((currentSquareId != 0) && (currentSquareId % 5 == 0) && !isCellPainted(currentSquareId)) && !isGameOver){
        let counter = 0;
        for (let i = 0; i < 5; i++) {
            let currentSquare = document.getElementById((currentSquareId-i) + "");
            let currentButton =   document.getElementById(currentSquare.innerText);
            let result = "wrong";
            if (WORDS[wordIndex].charAt(4-i) == currentSquare.innerText){
                result = "right";
                counter++;
            }else if (WORDS[wordIndex].includes(currentSquare.innerText)){
                result = "wrongPlace";
            }
            currentSquare.classList.add(result);
            if ((result == "wrongPlace" && !currentButton.classList.contains("right")) || (result != "wrongPlace")){
                currentButton.classList.add(result);
            }
        }
        if (counter == 5){
            isGameOver = true;
            alertMessage("YOU WIN 👑 !")
        }else if (currentSquareId == 30){
            alertMessage("YOU LOSE ... 😢 THE WORD WAS --> "+ WORDS[wordIndex])
        }
    }
}

function alertMessage (message){
    setTimeout(() => {
        alert(message);
    },1000)
}

function determiningId (){
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].innerText.length == 1){
            buttons[i].id = buttons[i].innerText;
            buttons[i].classList.add("letter");
        }
    }
}

function wordIndexLottery () {
    wordIndex = Math.ceil(Math.random() * 20) - 1;
}