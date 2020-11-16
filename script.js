const timer = document.querySelector('#timer')
const answers = document.querySelectorAll('#answers button')
const menu = document.querySelector('#menu')
const inputs = document.querySelectorAll('#menu input')
const startGame = document.querySelectorAll('#menu button')
const gameSection = document.querySelector('#gameSection')
const tracks = document.querySelectorAll('header audio')
const scores = document.querySelectorAll('.scores')
const endGame = document.querySelector('#endGame')
const verdict = document.querySelector('#endGame h1')
const playAgain = document.querySelectorAll('.restart')

let player1 = 'Player 1'
let player2 = 'Player 2'
let players = 0;
let gameSongs = [];
let song;
let turn = 1;
let currentAnswer;
let rightAnswer;
let scoreP1 = 0;
let scoreP2 = 0;
let question = 'song';
let clicked = false;
let givenAnswer = 0;
let player2Clicked = false;
let rightGivenAnswer = false;


startGame.forEach(button => {
    button.onclick = () => {
        players = button.innerHTML.charAt(0)
        menu.style.display = 'none'
        gameSection.style.display = 'flex'
        setGame()
        chooseSongs()
        setTimeout(playNextSong, 2000)
        if (inputs[0].value !== '') {player1 = inputs[0].value }
        if (inputs[1].value !== '') {player2 = inputs[1].value }
        scores[0].innerHTML = `${player1} Score: ${scoreP1}`
        scores[1].innerHTML = `${player2} Score: ${scoreP2}`
    }
})

const setGame = () => {
    if (players === '1') {
        scores[1].style.display = 'none'
    }
}

const chooseSongs = () => {
    for (let i = 0; 10 > gameSongs.length; i++) {
        random = Math.floor(Math.random() * 24) + 1;

        if(gameSongs.includes(random)) {
        } else {
            gameSongs.push(random)
        }
    } console.log(gameSongs);
}

const playNextSong = () => {
    assignSongs()
    startTimer()
};

const assignSongs = () => {
    switch (turn) {
        case 1: song = gameSongs[0]
        break
        case 2: song = gameSongs[1]
        break
        case 3: song = gameSongs[2]
        break
        case 4: song = gameSongs[3]
        break
        case 5: song = gameSongs[4]
        break
        case 6: song = gameSongs[5]
        break
        case 7: song = gameSongs[6]
        break
        case 8: song = gameSongs[7]
        break
        case 9: song = gameSongs[8]
        break
        case 10: song = gameSongs[9]
        break
    }
    playSongs()
}

const playSongs = () => {
    if (song === 1) {
        tracks[0].play()
        prepareAnswers()
    } else if (song === 2) {
        tracks[1].play()
        prepareAnswers()
    } else if (song === 3) {
        tracks[2].play()
        prepareAnswers()
    } else if (song === 4) {
        tracks[3].play()
        prepareAnswers()
    } else if (song === 5) {
        tracks[4].play()
        prepareAnswers()
    } else if (song === 6) {
        tracks[5].play()
        prepareAnswers()
    } else if (song === 7) {
        tracks[6].play()
        prepareAnswers()
    } else if (song === 8) {
        tracks[7].play()
        prepareAnswers()
    } else if (song === 9) {
        tracks[8].play()
        prepareAnswers()
    } else if (song === 10) {
        tracks[9].play()
        prepareAnswers()
    } else if (song === 11) {
        tracks[10].play()
        prepareAnswers()
    } else if (song === 12) {
        tracks[11].play()
        prepareAnswers()
    } else if (song === 13) {
        tracks[12].play()
        prepareAnswers()
    } else if (song === 14) {
        tracks[13].play()
        prepareAnswers()
    } else if (song === 15) {
        tracks[14].play()
        prepareAnswers()
    } else if (song === 16) {
        tracks[15].play()
        prepareAnswers()
    } else if (song === 17) {
        tracks[16].play()
        prepareAnswers()
    } else if (song === 18) {
        tracks[17].play()
        prepareAnswers()
    } else if (song === 19) {
        tracks[18].play()
        prepareAnswers()
    } else if (song === 20) {
        tracks[19].play()
        prepareAnswers()
    } else if (song === 21) {
        tracks[20].play()
        prepareAnswers()
    } else if (song === 22) {
        tracks[21].play()
        prepareAnswers()
    } else if (song === 23) {
        tracks[22].play()
        prepareAnswers()
    } else if (song === 24) {
        tracks[23].play()
        prepareAnswers()
    }
}

const prepareAnswers = () => {
    if (song === 1) {
        answers[0].innerHTML = 'Bad romance'
        answers[1].innerHTML = 'Alejandro'
        answers[2].innerHTML = 'Smile'
        answers[3].innerHTML = 'La isla bonita'
        rightAnswer = 'Bad romance'
    } else if (song === 2) {
        answers[0].innerHTML = 'Rehab'
        answers[1].innerHTML = 'Lonely'
        answers[2].innerHTML = 'Love love love'
        answers[3].innerHTML = 'Back to black'
        rightAnswer = 'Back to black'
    } else if (song === 3) {
        answers[0].innerHTML = 'Your song'
        answers[1].innerHTML = 'Believe'
        answers[2].innerHTML = 'Need you now'
        answers[3].innerHTML = 'Them'
        rightAnswer = 'Believe'
    } else if (song === 4) {
        answers[0].innerHTML = 'One'
        answers[1].innerHTML = 'Angels'
        answers[2].innerHTML = 'Spirits'
        answers[3].innerHTML = 'Dancing on my own'
        rightAnswer = 'Dancing on my own'
    } else if (song === 5) {
        answers[0].innerHTML = 'Dust in the wind'
        answers[1].innerHTML = '1973'
        answers[2].innerHTML = 'The power of love'
        answers[3].innerHTML = 'Brave'
        rightAnswer = 'Dust in the wind'
    } else if (song === 6) {
        answers[0].innerHTML = 'Emily'
        answers[1].innerHTML = 'Here with me'
        answers[2].innerHTML = 'Girls just wanna have fun'
        answers[3].innerHTML = 'Strong enough'
        rightAnswer = 'Girls just wanna have fun'
    } else if (song === 7) {
        answers[0].innerHTML = 'Help'
        answers[1].innerHTML = 'Imagine'
        answers[2].innerHTML = 'Never ending story'
        answers[3].innerHTML = 'Angie'
        rightAnswer = 'Help'
    }  else if (song === 8) {
        answers[0].innerHTML = 'Numb'
        answers[1].innerHTML = 'Riders on the storm'
        answers[2].innerHTML = 'Karma police'
        answers[3].innerHTML = 'In the end'
        rightAnswer = 'In the end'
    }  else if (song === 9) {
        answers[0].innerHTML = 'I was made for loving you'
        answers[1].innerHTML = 'Kiss me'
        answers[2].innerHTML = 'Love song'
        answers[3].innerHTML = 'Gimme more'
        rightAnswer = 'I was made for loving you'
    }  else if (song === 10) {
        answers[0].innerHTML = 'I want to break free'
        answers[1].innerHTML = 'Lover'
        answers[2].innerHTML = 'Freedom'
        answers[3].innerHTML = 'I need'
        rightAnswer = 'I want to break free'
    }  else if (song === 11) {
        answers[0].innerHTML = 'True'
        answers[1].innerHTML = 'Sweet child of mine'
        answers[2].innerHTML = 'Fear of the dark'
        answers[3].innerHTML = "Knocking on heaven's door"
        rightAnswer = "Knocking on heaven's door"
    }  else if (song === 12) {
        answers[0].innerHTML = 'Your call'
        answers[1].innerHTML = 'Lego house'
        answers[2].innerHTML = 'Ring of fire'
        answers[3].innerHTML = 'Hero'
        rightAnswer = 'Lego house'
    }  else if (song === 13) {
        answers[0].innerHTML = 'Love story'
        answers[1].innerHTML = 'Love me'
        answers[2].innerHTML = 'You need to calm down'
        answers[3].innerHTML = 'Shallow'
        rightAnswer = 'Love story'
    }  else if (song === 14) {
        answers[0].innerHTML = 'Rise'
        answers[1].innerHTML = 'Time to dance'
        answers[2].innerHTML = 'My immortal'
        answers[3].innerHTML = 'Brother'
        rightAnswer = 'My immortal'
    }  else if (song === 15) {
        answers[0].innerHTML = 'Lullaby'
        answers[1].innerHTML = 'Ocean eyes'
        answers[2].innerHTML = 'Dear God'
        answers[3].innerHTML = 'Wonderful life'
        rightAnswer = 'Ocean eyes'
    }  else if (song === 16) {
        answers[0].innerHTML = 'Rude'
        answers[1].innerHTML = 'Numbers'
        answers[2].innerHTML = 'Ghost towns'
        answers[3].innerHTML = 'I know'
        rightAnswer = 'Rude'
    }  else if (song === 17) {
        answers[0].innerHTML = 'I miss you'
        answers[1].innerHTML = 'Here with me'
        answers[2].innerHTML = 'Take on me'
        answers[3].innerHTML = 'Sleeping sun'
        rightAnswer = 'Take on me'
    }  else if (song === 18) {
        answers[0].innerHTML = 'Let her go'
        answers[1].innerHTML = 'Heaven'
        answers[2].innerHTML = 'I will wait'
        answers[3].innerHTML = 'Thriller'
        rightAnswer = 'Thriller'
    }  else if (song === 19) {
        answers[0].innerHTML = 'Born this way'
        answers[1].innerHTML = 'Paint it black'
        answers[2].innerHTML = 'Fear of the dark'
        answers[3].innerHTML = 'Thunderstruck'
        rightAnswer = 'Thunderstruck'
    }  else if (song === 20) {
        answers[0].innerHTML = 'Applause'
        answers[1].innerHTML = 'You and I'
        answers[2].innerHTML = 'Unconditionally'
        answers[3].innerHTML = 'Judas'
        rightAnswer = 'Unconditionally'
    }  else if (song === 21) {
        answers[0].innerHTML = 'Always'
        answers[1].innerHTML = 'Zombies'
        answers[2].innerHTML = "What's up"
        answers[3].innerHTML = 'Sexy boy'
        rightAnswer = "What's up"
    }  else if (song === 22) {
        answers[0].innerHTML = 'Cancer'
        answers[1].innerHTML = 'Nothing to lose'
        answers[2].innerHTML = 'One day'
        answers[3].innerHTML = 'When you are gone'
        rightAnswer = 'When you are gone'
    }  else if (song === 23) {
        answers[0].innerHTML = 'Crash'
        answers[1].innerHTML = 'Wind of change'
        answers[2].innerHTML = 'Hurt'
        answers[3].innerHTML = 'November rain'
        rightAnswer = 'Wind of change'
    }  else if (song === 24) {
        answers[0].innerHTML = 'Without me'
        answers[1].innerHTML = 'Do you really want to hurt me'
        answers[2].innerHTML = 'Attack'
        answers[3].innerHTML = 'Oblivion'
        rightAnswer = 'Without me'
    }
}

answers.forEach(answer => {
    answer.onclick = () => {
        currentAnswer = answer.innerHTML
        if (question === 'song' && clicked === false && rightGivenAnswer === false){
            givenAnswer++
            if (currentAnswer === rightAnswer) {
                scoreP1 += 5
                answer.style.backgroundColor = 'green'
                rightGivenAnswer = true
            } else {
                answer.style.backgroundColor = 'red'
                scoreP1 -= 5
                if(scoreP1 < 0) {scoreP1 = 0}
            } clicked = true
            if (players === '1') {
                question = 'artist'
                setTimeout(artist, 1000)
            } else if (givenAnswer === 2 || currentAnswer === rightAnswer ) {
                question = 'artist'
                setTimeout(artist, 1000)
            }

        } else if (question === 'artist' && clicked === false && rightGivenAnswer === false){
            if (currentAnswer === rightAnswer) {
                scoreP1 += 5
                answer.style.backgroundColor = 'green'
                rightGivenAnswer = true
            } else {
                scoreP1 -= 5
                if(scoreP1 < 0) {scoreP1 = 0}
                answer.style.backgroundColor = 'red'
            } 
            clicked = true
        } scores[0].innerHTML = `${player1} Score: ${scoreP1}`
    }
})

window.addEventListener('keydown', (event) => {
    if (player2Clicked === false && rightGivenAnswer === false && players === '2') {
        if(event.keyCode === 37) {
            currentAnswer = answers[0].innerHTML
            if (currentAnswer === rightAnswer) {
                answers[0].style.backgroundColor = 'green'
            } else {
                answers[0].style.backgroundColor = 'red'
            }
        } else if(event.keyCode === 38) {
            currentAnswer = answers[1].innerHTML
            if (currentAnswer === rightAnswer) {
                answers[1].style.backgroundColor = 'green'
            } else {
                answers[1].style.backgroundColor = 'red'
            }
        } else if(event.keyCode === 40) {
            currentAnswer = answers[2].innerHTML
            if (currentAnswer === rightAnswer) {
                answers[2].style.backgroundColor = 'green'
            } else {
                answers[2].style.backgroundColor = 'red'
            }
        } else if(event.keyCode === 39) {
            currentAnswer = answers[3].innerHTML
            if (currentAnswer === rightAnswer) {
                answers[3].style.backgroundColor = 'green'
            } else {
                answers[3].style.backgroundColor = 'red'
            }
        } kbAnswer()
    } 
})

const kbAnswer = () => {
    if (question === 'song' && player2Clicked === false && rightGivenAnswer === false){
        givenAnswer++;
        if (currentAnswer === rightAnswer) {
            scoreP2 += 5;
            rightGivenAnswer = true;
        } else {
            scoreP2 -= 5;
            if(scoreP2 < 0) {scoreP2 = 0}
        } player2Clicked = true;
        if (givenAnswer === 2 || currentAnswer === rightAnswer ) {
            question = 'artist'
            setTimeout(artist, 1000)
        }    
    } else if (question === 'artist' && player2Clicked === false && rightGivenAnswer === false){
        if (currentAnswer === rightAnswer) {
            scoreP2 += 5;
            rightGivenAnswer = true;
        } else {
            scoreP2 -= 5;
            if(scoreP2 < 0) {scoreP2 = 0}
        }
        player2Clicked = true;
    } scores[1].innerHTML = `${player2} Score: ${scoreP2}`
}

const artist = () => {
    answers.forEach(answer => {answer.style.backgroundColor = 'unset'})
    clicked = false;
    player2Clicked = false;
    rightGivenAnswer = false
    givenAnswer = 0;
    if (song === 1) {
        answers[0].innerHTML = 'P!nk'
        answers[1].innerHTML = 'Katy Perry'
        answers[2].innerHTML = 'Lady Gaga'
        answers[3].innerHTML = 'Madonna'
        rightAnswer = 'Lady Gaga'
    } else if (song === 2) {
        answers[0].innerHTML = 'Amy Winehouse'
        answers[1].innerHTML = 'Cher'
        answers[2].innerHTML = 'Gloria Gaynor'
        answers[3].innerHTML = 'Madonna'
        rightAnswer = 'Amy Winehouse'
    } else if (song === 3) {
        answers[0].innerHTML = 'Sia'
        answers[1].innerHTML = 'Kelly Clarkson'
        answers[2].innerHTML = 'Madonna'
        answers[3].innerHTML = 'Cher'
        rightAnswer = 'Cher'
    } else if (song === 4) {
        answers[0].innerHTML = 'Robyn'
        answers[1].innerHTML = 'Lana Del Rey'
        answers[2].innerHTML = 'Patti Smith'
        answers[3].innerHTML = 'Amy Macdonald'
        rightAnswer = 'Robyn'
    } else if (song === 5) {
        answers[0].innerHTML = 'Bastille'
        answers[1].innerHTML = 'Fun'
        answers[2].innerHTML = 'Jhonny Cash'
        answers[3].innerHTML = 'The Kansas'
        rightAnswer = 'The Kansas'
    } else if (song === 6) {
        answers[0].innerHTML = 'LP'
        answers[1].innerHTML = 'Regina Spektor'
        answers[2].innerHTML = 'Cyndi Lauper'
        answers[3].innerHTML = 'Rozalla'
        rightAnswer = 'Cyndi Lauper'
    } else if (song === 7) {
        answers[0].innerHTML = 'Neil Young'
        answers[1].innerHTML = 'The Beatles'
        answers[2].innerHTML = 'Freddie Mercury'
        answers[3].innerHTML = 'Papa Roach'
        rightAnswer = 'The Beatles'
    } else if (song === 8) {
        answers[0].innerHTML = 'Dog Is Dead'
        answers[1].innerHTML = 'Bloc Party'
        answers[2].innerHTML = 'Paramore'
        answers[3].innerHTML = 'Linkin Park'
        rightAnswer = 'Linkin Park'
    } else if (song === 9) {
        answers[0].innerHTML = 'Iron Maiden'
        answers[1].innerHTML = 'AC/DC'
        answers[2].innerHTML = 'Kiss'
        answers[3].innerHTML = 'Falling In Reverse'
        rightAnswer = 'Kiss'
    } else if (song === 10) {
        answers[0].innerHTML = 'Justin Bieber'
        answers[1].innerHTML = 'The Queen'
        answers[2].innerHTML = 'Kings Of Leon'
        answers[3].innerHTML = 'HIM'
        rightAnswer = 'The Queen'
    } else if (song === 11) {
        answers[0].innerHTML = 'Pink Floys'
        answers[1].innerHTML = 'Bon Jovi'
        answers[2].innerHTML = "Guns N' Roses"
        answers[3].innerHTML = 'The Clash'
        rightAnswer = "Guns N' Roses"
    } else if (song === 12) {
        answers[0].innerHTML = 'James Blunt'
        answers[1].innerHTML = 'Ed Sheeran'
        answers[2].innerHTML = 'Shawn Mendes'
        answers[3].innerHTML = 'YUNGBLUD'
        rightAnswer = 'Ed Sheeran'
    } else if (song === 13) {
        answers[0].innerHTML = 'Taylor Swift'
        answers[1].innerHTML = 'Lana Del Rey'
        answers[2].innerHTML = 'Leona Lewis'
        answers[3].innerHTML = 'Dido'
        rightAnswer = 'Taylor Swift'
    } else if (song === 14) {
        answers[0].innerHTML = 'Sia'
        answers[1].innerHTML = 'Blondie'
        answers[2].innerHTML = 'Billie Eilish'
        answers[3].innerHTML = 'Evanescence'
        rightAnswer = 'Evanescence'
    } else if (song === 15) {
        answers[0].innerHTML = 'Norah Jones'
        answers[1].innerHTML = 'Lana Del Rey'
        answers[2].innerHTML = 'RadioHead'
        answers[3].innerHTML = 'Billie Eilish'
        rightAnswer = 'Billie Eilish'
    } else if (song === 16) {
        answers[0].innerHTML = 'Skillet'
        answers[1].innerHTML = 'My Chemical Romance'
        answers[2].innerHTML = 'Bring Me The Horizon'
        answers[3].innerHTML = 'MAGIC!'
        rightAnswer = 'MAGIC!'
    } else if (song === 17) {
        answers[0].innerHTML = 'The Cure'
        answers[1].innerHTML = 'a-ha'
        answers[2].innerHTML = 'The Cranberries'
        answers[3].innerHTML = 'Smashing Pumpkins'
        rightAnswer = 'a-ha'
    } else if (song === 18) {
        answers[0].innerHTML = 'Sam Smith'
        answers[1].innerHTML = 'Metro Station'
        answers[2].innerHTML = 'BLACK'
        answers[3].innerHTML = 'Michael Jackson'
        rightAnswer = 'Michael Jackson'
    } else if (song === 19) {
        answers[0].innerHTML = 'Iron Maiden'
        answers[1].innerHTML = 'Oasis'
        answers[2].innerHTML = 'AC/DC'
        answers[3].innerHTML = 'Lee Reed'
        rightAnswer = 'AC/DC'
    } else if (song === 20) {
        answers[0].innerHTML = 'Katy Perry'
        answers[1].innerHTML = 'Little Mix'
        answers[2].innerHTML = 'Clean Bandit'
        answers[3].innerHTML = 'Dua Lipa'
        rightAnswer = 'Katy Perry'
    } else if (song === 21) {
        answers[0].innerHTML = 'The Knack'
        answers[1].innerHTML = 'Nightwish'
        answers[2].innerHTML = '4 Non Blondes'
        answers[3].innerHTML = 'Scorpions'
        rightAnswer = '4 Non Blondes'
    } else if (song === 22) {
        answers[0].innerHTML = 'Paramore'
        answers[1].innerHTML = 'Avril Lavigne'
        answers[2].innerHTML = 'Bad Religion'
        answers[3].innerHTML = 'Evanescence'
        rightAnswer = 'Avril Lavigne'
    } else if (song === 23) {
        answers[0].innerHTML = 'Scorpions'
        answers[1].innerHTML = 'The Beatles'
        answers[2].innerHTML = 'NOFX'
        answers[3].innerHTML = 'System Of A Down'
        rightAnswer = 'Scorpions'
    } else if (song === 24) {
        answers[0].innerHTML = '2Pac'
        answers[1].innerHTML = 'NAV'
        answers[2].innerHTML = 'Eminem'
        answers[3].innerHTML = 'Giggs'
        rightAnswer = 'Eminem'
    }
}

const runTimer = () => {
    if (timer.innerHTML !== '0') {
        timer.innerHTML--
    } else {
        clearInterval(myvar)
        question = ''
        answers[4].style.display = 'block'
        playAgain[0].style.display = 'block'
    }
}

answers[4].addEventListener('click', () => {
    answers[4].style.display = 'none'
    playAgain[0].style.display = 'none'
    nextSong()
});

const startTimer = () => myvar = setInterval(runTimer, 1000)

nextSong = () => {
    if (turn < 10) {
        turn++
        timer.innerHTML = 10
        answers.forEach(answer => {answer.innerHTML = ''})
        answers.forEach(answer => {answer.style.backgroundColor = 'unset'})
        clicked = false;
        player2Clicked = false;
        rightGivenAnswer = false;
        givenAnswer = 0;
        question = 'song'
        setTimeout(playNextSong, 1000)
        if (turn < 9) {
            answers[4].innerHTML = 'Next Song'
        } else if (turn < 10){
            answers[4].innerHTML = 'Last Song'
        } else {
            answers[4].innerHTML = 'End'
        }
    } else {
        winner()
    }
}

const winner = () => {
    if (players === '1') {
        gameSection.style.display = 'none'
        endGame.style.display = 'block'
        verdict.innerHTML = `Well done! <br> You totalised ${scoreP1} points`
    } else {
        gameSection.style.display = 'none'
        endGame.style.display = 'block'
        if (scoreP1 > scoreP2) {
        verdict.innerHTML = `Well done ${player1} <br> You won! <br> You totalised ${scoreP1} points against the ${scoreP2} of player 2`
        } else if (scoreP1 < scoreP2) {
            verdict.innerHTML = `Well done ${player2} <br> You won! <br> You totalised ${scoreP2} points against the ${scoreP1} of player 1`
        } else if (scoreP1 = scoreP2) {
            verdict.innerHTML = `Well done the both of you! <br> You both won <br> You both totalised ${scoreP1} points`
        }
    }
}

playAgain.forEach(button => {
button.onclick = () => {
    answers.forEach(answer => {answer.innerHTML = ''})
    answers.forEach(answer => {answer.style.backgroundColor = 'unset'})
    playAgain[0].style.display = 'none'
    timer.innerHTML = 10
    gameSongs = [];
    turn = 1;
    scoreP1 = 0;
    scoreP2 = 0;
    question = 'song'    
    clicked = false;
    player2Clicked = false;
    rightGivenAnswer = false;
    givenAnswer = 0;
    scores[0].innerHTML = `Score: ${scoreP1}`
    scores[1].innerHTML = `Score: ${scoreP2}`
    answers[4].innerHTML = 'Next Song'
    endGame.style.display = 'none'
    gameSection.style.display = 'none'
    menu.style.display = 'flex'
}
})









