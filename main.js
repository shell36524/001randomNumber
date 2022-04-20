// 랜덤번호 지정
// 유저가 번호를 입력하고 버튼을 누른다
// 만약에 유저가 랜덤번호를 맞추면 : 정답!
// 랜덤번호 < 유저가 고른 번호 : DOWN!
// 랜덤번호 > 유저가 고른 번호 : UP!
// RESET : 게임 리셋
// 5번의 기회를 소모하면 게임이 끝난다 > 버튼 사용 불가
// 유효성검사 유저가 1~100 밖의 숫자 입력 알려주고 기회 차감 x
// 유저가 이미 입력한 숫자를 또 입력하면 알려주고 기회 차감 x

// 변수 선언
let comNum = 0;
let playButton = document.getElementById("playBtn");
let userInput = document.getElementById("userInp");
let resultArea = document.getElementById("resultA");
let resetButton = document.getElementById("resetBtn");
let chances = 5;
let gameOver = false;
let chancesArea = document.getElementById("chancesA");
// 유저가 이미 입력한 숫자를 또 입력하면 알려주고 기회 차감 x
let history = [];

// 클릭 이벤트
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
// focus 위치가 선택되었을때 발생 (function(): 익명의 함수)
userInput.addEventListener("focus",function(){userInput.value= ""};)

// 랜덤번호 함수생성
function pickRandomNum(){
  comNum = Math.floor(Math.random() * 100) + 1;
  console.log("랜덤번호 생성", comNum);
}

// 게임실행 함수생성
function play(){
  let userValue = userInput.value;

  // 유효성 검사 1)(기회 차감 x)
  if(userValue < 1 || userValue > 100){
    resultArea.textContent = "1~100 사이의 숫자를 입력하세요";
    return;
  }

  // 유효성 검사 2)(기회 차감 x)
  if(history.includes(userValue)){
    resultArea.textContent="이미 입력한 숫자입니다. 다시 입력해주세요";
    return;
  }


  // 클릭 시 기회가 차감됨
  chances -- ;
  chancesArea.textContent = `남은 기회: ${chances}번`; 
  console.log("기회 : ", chances);

  if(userValue < comNum){
    resultArea.textContent = "UP!";
    console.log("UP!");
  }else if(userValue > comNum){
    resultArea.textContent = "DOWN!";
    console.log("DOWN!");
  }else{
    resultArea.textContent = "정답!";
    console.log("정답");
    gameOver = true;
  }

  history.push(userValue);
  console.log("입력한 숫자 확인")

  if(chances < 1){
    gameOver = true;
  }
  if(gameOver == true){
    playButton.disabled = true;
  }
}

// 리셋 함수생성
function reset(){
  // input창 정리
  userInput.value = "";
  // 새로운 번호 생성
  pickRandomNum();
  resultArea.textContent = "새롭게 시작합니다."
}

pickRandomNum();