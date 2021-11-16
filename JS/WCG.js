const $startMessage = document.querySelector("div:first-child")
const $startPlayers = document.querySelector("#start__number")
const $playerNumberForm = document.querySelector("#player__number");
const $numberOfPlayers = document.querySelector("#player__number input");
const $numberOfPlayerBtn = document.querySelector("#player__number .submit");
const $order = document.querySelector("#order");
const $word = document.querySelector("#word");
const $answerForm = document.querySelector("#answer");
const $givenWord = document.querySelector("#answer input");
const $answerBtn = document.querySelector("#answer .submit");

let numberOfPlayers;
let word;
let newWord;
let order = 1;

$numberOfPlayers.focus();                                       // 클릭했을 때의 효과.

$numberOfPlayerBtn.addEventListener("click", (event) => {       // 플레이어 수를 입력받음.
    event.preventDefault();                                     // 버튼을 클릭하면 기본적으로 브라우저가 새로고침돼는 현상을 없앰.
    numberOfPlayers = $numberOfPlayers.value;          
    console.log(numberOfPlayers);
    $playerNumberForm.classList.add("hidden");
    $startPlayers.innerText = numberOfPlayers;
    $startMessage.classList.remove("hidden");
    $answerForm.classList.remove("hidden");
    $givenWord.focus();                                         // 한번에 두가지 요소 focus는 안된다.
    return;
});

$answerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    newWord = $givenWord.value;
    $givenWord.value = "";
    if(!word || word[word.length-1] === newWord[0]){            // 첫번째 차례거나 정답일 때.
        $word.innerText = newWord;
        word = newWord;
    }
    else{                                                       // 오답일 때
        alert("Game Over");
        return;
    }
    if(order < parseInt(numberOfPlayers)){                      // 몇번째 참가자가 할 차롄지 나타냄.
        order += 1;   
    }
    else{
        order = 1;
    }
    $order.innerText = order;
});



