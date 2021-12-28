// when player choose the option
document.addEventListener('click', (e) => {
  
  const rpsStart = document.querySelector('.rps-start');
  const rpsPlay = document.querySelector('.rps-play');
  const youPicked = document.querySelector('.you-picked img');
  const housePicked = document.querySelector('.house-picked img');
  const resultContain = document.querySelector('.result-contain');
  const win = document.querySelector('.win');
  const lose = document.querySelector('.lose');
  const draw = document.querySelector('.draw');
  const playAgainBtn = document.querySelector('.play-again-btn');
  const rulesBox = document.querySelector('.rules-box');
  
  if(e.target.parentElement.classList.contains('rock')) {
    youPicked.parentElement.classList.remove('paper-choose');
    youPicked.parentElement.classList.remove('scissors-choose');
    youPicked.parentElement.classList.add('rock-choose');
  } else if(e.target.parentElement.classList.contains('paper')) {
    youPicked.parentElement.classList.remove('rock-choose');
    youPicked.parentElement.classList.remove('scissors-choose');
    youPicked.parentElement.classList.add('paper-choose');
  } else if(e.target.parentElement.classList.contains('scissors')) {
    youPicked.parentElement.classList.remove('rock-choose');
    youPicked.parentElement.classList.remove('paper-choose');
    youPicked.parentElement.classList.add('scissors-choose');
  }
  
  if(e.target.parentElement.classList.contains('rps')) {
    rpsStart.classList.add('hidden');
    rpsPlay.classList.add('show');
    youPicked.src = e.target.src;
    
    const housePickedOuter = document.querySelector('.house-picked');
    const images = ['img/icon-rock.svg', 'img/icon-paper.svg', 'img/icon-scissors.svg'];
    const borderColors = ['hsl(349, 70%, 56%)', 'hsl(230, 89%, 65%)', 'hsl(40, 84%, 53%)']
    
    let index1 = 0;
    let index2 = Math.round(Math.random() * 2);
      let inter = setInterval(()=> {
        index1++;
        if(index1 > 2) index1 = 0;
        housePicked.src = images[index1];
        housePickedOuter.style.borderColor = borderColors[index1];
        
      }, 90);
      setTimeout(()=> {
        housePicked.src = images[index2];
        housePickedOuter.style.borderColor = borderColors[index2];
      }, 990);
      setTimeout(()=> {
        clearInterval(inter)
        rpsRules(youPicked, housePicked);
      }, 1000);
      resultContain.classList.add('show-result');
      
  };
  if(e.target.classList.contains('play-again-btn')) {
    rpsStart.classList.remove('hidden');
    rpsPlay.classList.remove('show');
    youPicked.parentElement.classList.remove('winner')
    housePicked.parentElement.classList.remove('winner')
    resultContain.classList.remove('show-result');
    win.classList.remove('show-result');
    lose.classList.remove('show-result');
    draw.classList.remove('show-result');
    playAgainBtn.classList.remove('show-play-btn');
  }
  if(e.target.classList.contains('btn-rules')) {
    rulesBox.classList.add('show');
  } else if(e.target.classList.contains('close-btn')) {
    rulesBox.classList.remove('show');
  }
  
});


// rules rock paper scissors
function rpsRules(youPicked, housePicked) {
  
      let yourChoice = document.querySelector('.you-picked');
      let yourSrc = youPicked.src;
      let position = yourSrc.indexOf('img') + 9;
      let your = yourSrc.slice(position,   -4);
      let houseSrc = housePicked.src;
      let house = houseSrc.slice(position,   -4);
      
      let result = getResult(your, house);
      const scoreNumber = document.querySelector('.score-number');
      const resultContain = document.querySelector('.result-contain');
      const win = document.querySelector('.win');
      const lose = document.querySelector('.lose');
      const draw = document.querySelector('.draw');
      const playAgainBtn = document.querySelector('.play-again-btn');
      
      
      setTimeout(()=> playAgainBtn.classList.add('show-play-btn'), 500);
      if(result == 'WIN') {
        
        youPicked.parentElement.classList.add('winner');
        scoreNumber.textContent = Number(scoreNumber.textContent) + 1;
        win.classList.add('show-result');
     
      } else if(result == 'LOSE') {
        
        housePicked.parentElement.classList.add('winner');
        lose.classList.add('show-result')
        if(scoreNumber.textContent == 0) return;
        scoreNumber.textContent = Number(scoreNumber.textContent) - 1;
      
      } else {
        
        draw.classList.add('show-result')
     
      }
  
}

function getResult(your, house) {

  if(your == house) return 'DRAW';
  if(your == 'rock') return (house == 'paper') ? 'LOSE' : 'WIN';
  if(your == 'paper') return (house == 'scissors') ? 'LOSE' : 'WIN';
  if(your == 'scissors') return (house == 'paper') ? 'WIN' : 'LOSE';
  
}