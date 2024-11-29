let secretNumber, attempts, userName;

function startGame() {
    if (!(userName = document.getElementById('name').value)) return alert('Por favor, digite seu nome!');
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById('welcome-message').innerText = `Olá, ${userName}!`;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
}

function checkGuess() {
    const guess = +document.getElementById('guess').value;
    if (!guess) return;
    attempts++;
    document.getElementById('attempts').innerText = attempts;
    const feedback = guess === secretNumber
        ? `Parabéns, ${userName}! Você acertou o número secreto em ${attempts} tentativas.`
        : `O número é ${guess < secretNumber ? 'maior' : 'menor'}. Tente novamente!`;
    document.getElementById('feedback').innerText = feedback;
    if (guess === secretNumber) document.getElementById('retry-btn').style.display = 'block';
}

function restartGame() {
    document.getElementById('guess').value = '';
    document.getElementById('feedback').innerText = '';
    document.getElementById('retry-btn').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
    document.getElementById('game-area').style.display = 'none';
}
