let score=JSON.parse(localStorage.getItem('score')) ||{
    wins:0,
    losses:0,
    ties:0
    };

    updateScoreElement();

    function playGame(playerMove){
        const Computermove=pickComputerMove();
        let result='';

        if (playerMove=='rock'){
            if(Computermove==='rock')
            {
                result='Tie.';
            }
            else if (Computermove=='paper'){
                result='you lose.';
            }
            else if(Computermove=='scissors'){
                result='you win.';
            }
            }

        else if (playerMove=='paper'){
            if(Computermove==='paper')
            {
                result='Tie.';
            }
            else if (Computermove=='rock'){
                result='you win.';
            }
            else if(Computermove=='scissors'){
                result='you lose.';
            }
        }

        else if(playerMove=='scissors'){
            if(Computermove==='scissors')
            {
                result='Tie.';
            }
            else if (Computermove=='rock'){
                result='you lose.';
            }
            else if(Computermove=='paper'){
                result='you win.';
            }
        }

        if(result==='you win.'){
            score.wins+=1;
        }
        else if(result==='you lose.'){
            score.losses+=1;
        }
        else if(result==='Tie.'){
            score.ties+=1;
        }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML=result;
    document.querySelector('.js-moves').innerHTML=` You
    <img src="RPS-images/${playerMove}-emoji.png" class="move-icon">
    <img src="RPS-images/${Computermove}-emoji.png" class="move-icon">
    Computer`;
            
    }

    function updateScoreElement(){
        document.querySelector('.js-score').innerHTML=
        `Wins: ${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
    }
    function pickComputerMove(){
    const randomNumber=Math.random();
    let Computermove=' ';
    if(randomNumber>=0 && randomNumber<1/3){
        Computermove='rock';
    }
    else if (randomNumber>=1/3 && randomNumber<2/3)
    {
        Computermove='paper';
    }
    else if (randomNumber>2/3 && randomNumber<1){
        Computermove='scissors';
    }
    return Computermove;
    }