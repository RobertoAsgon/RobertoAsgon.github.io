const game = () => {
    let jScore = 0;
    let cScore = 0;

    const startGame = () =>{
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    // Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation="";
            });
        });

        const computerOptions = ['Pedra','Papel','Tesoura'];

        options.forEach((option)=>{
            option.addEventListener('click', function(){
                //cada vez que eu clicar no button o pc faz a escolha aleatória
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                const jokenpoMsg = document.querySelector('.jokenpo');
               
                setTimeout(() => {
                    jokenpoMsg.textContent = "Jo!";
                }, 700);

                setTimeout(() => {
                    jokenpoMsg.textContent = "Ken!";
                }, 1700);

                setTimeout(() => {
                    jokenpoMsg.textContent = "Po!";
                }, 2700);

                // update images
                setTimeout(() => {

                compareHands(this.textContent, computerChoice);

                playerHand.src = `./img/${this.textContent}.png`;
                computerHand.src = `./img/${computerChoice}.png`;
                }, 2800);

                playerHand.style.animation = "shakePlayer 2.8s ease";
                computerHand.style.animation = "shakeComputer 2.8s ease";

            });
        });

        
    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = jScore;
        computerScore.textContent = cScore;
    }
    
    const compareHands = (playerChoice,computerChoice) =>{
        const winner = document.querySelector('.winner');

        if (playerChoice === computerChoice){
            winner.textContent = "Empate! 😑 ";
            return;
        }
        if (playerChoice === 'Pedra'){
            if(computerChoice === 'Tesoura'){
                winner.textContent = 'Parabéns 😆 você ganhou ! 👍';
                jScore ++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Você perdeu 😭 tente novamente ! 👎';
                cScore ++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'Papel'){
            if(computerChoice === 'Tesoura'){
                winner.textContent = 'Você perdeu 😭 tente novamente ! 👎';
                cScore ++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Parabéns 😆 você ganhou ! 👍';
                jScore ++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'Tesoura'){
            if(computerChoice === 'Pedra'){
                winner.textContent = 'Você perdeu 😭 tente novamente ! 👎';
                cScore ++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Parabéns 😆 você ganhou ! 👍';
                jScore ++;
                updateScore();
                return;
            }
        }
    }
    
    startGame();
    playMatch();
  
}

game();