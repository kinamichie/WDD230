
const startButton = document.getElementById('startBtn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answerBtn');
const nextButton = document.getElementById('nextBtn');

let shuffleQuestions, currentQuestionIndex;


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}
function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);
}
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButton.appendChild(button);
    })
}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButton.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    }else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}
function setStatusClass(element, correct){
    clearStatusClass(element);
    if (correct){
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}
function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
const questions = [
    {
        question: 'What is the largest land mammal in Alaska?',
        answers: [
            { text: 'Grizzley Bear', correct: false },
            { text: 'Grizzley Bear', correct: false },
            { text: 'Moose', correct: true },
            { text: 'Grizzley Bear', correct: false }
                ]
            },
    {
        question: 'What is the Alaska\'s state bird?',
        answers: [
            { text: 'Ptarmagin', correct: true },
            { text: 'Grizzley Bear', correct: false },
            { text: 'Moose', correct: false },
            { text: 'Grizzley Bear', correct: false }
        ]
    }  
]
/*
//create quiz element
function createQuizElement(){
    //quiz div
    const quizDiv = document.createElement('div');
    quizDiv.classList.add('hide');
    quizDiv.setAttribute('id', 'question-container');

    //question div
    const questionDiv = document.createElement('div');
    questionDiv.setAttribute('id', 'question');

    //buttons grid
    const answerDiv = document.createElement('div');
    answerDiv.setAttribute('id', 'answerBtn');
    answerDiv.classList.add('btnGrid');

    //quiz buttons    
    const answer1 = document.createElement('button');
    answer1.classList('btn');
    const answer2 = document.createElement('button');
    answer2.classList('btn');
    const answer3 = document.createElement('button');
    answer2.classList('btn');
    const answer4 = document.createElement('button');
    answer2.classList('btn');

    
    

    quizDiv.appendChild(questionDiv);
    quizDiv.appendChild(answerDiv);
    quizDiv.appendChild(answer1);
    quizDiv.appendChild(answer2);
    quizDiv.appendChild(answer3);
    quizDiv.appendChild(answer4);

    return quizDiv;
}*/


/*<div id="question-container" class="hide">
                <div id="question">Question</div>
                <div id="answerBtn" class="btnGrid">
                    <button class="btn">Answer1</button>
                    <button class="btn">Answer2</button> 
                    <button class="btn">Answer3</button> 
                    <button class="btn">Answer4</button>
                </div>
            </div>
            <div id="quiz" class="hide"></div>
            <div class="controls">
                <button id="startBtn" class="startBtn">Start</button>
                <button id="nextBtn" class="nextBtn hide">Next</button>
            </div>*/


export default{
    startGame,
    setNextQuestion,
    showQuestion,
    resetState,
    selectAnswer,
    setStatusClass,
    //createQuizElement,
    clearStatusClass
}