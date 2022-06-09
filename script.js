

// Creamos un objeto, alternativas, y la respuesta correcta en la posicion tal o el id tanto
const question = {
    title: "Gato",
    alternatives: ['dog', 'cat', 'bird', 'cow'],
    correctAnswer: 1 // En vez de poner el texto de la solucion, su posicion, asi una va a poder cambiar la respuesta
}

let questions = [
    {
        title: "Gato",
        alternatives: ['dog', 'cat', 'bird', 'cow'],
        correctAnswer: 1 // En vez de poner el texto de la solucion, su posicion, asi una va a poder cambiar la respuesta
    },
    {
        title: "Ave",
        alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
        correctAnswer: 3 // En vez de poner el texto de la solucion, su posicion, asi una va a poder cambiar la respuesta
    },
    {
        title: "rata",
        alternatives: ['cat', 'fish', 'cow', 'rat'],
        correctAnswer: 3 // En vez de poner el texto de la solucion, su posicion, asi una va a poder cambiar la respuesta
    },
    {
        title: "mosca",
        alternatives: ['shark', 'panda', 'fly', 'dog'],
        correctAnswer: 2 // En vez de poner el texto de la solucion, su posicion, asi una va a poder cambiar la respuesta
    },
]

const app = {
    start: function() {

        this.currentPosition = 0;
        this.score = 0;

        let resultDiv = document.getElementById('result')
        const alternativeElements = document.getElementsByClassName('alternative')



        for (let i = 0; i < alternativeElements.length; i++) {

            const element = alternativeElements[i]

            /*element.addEventListener('click', function () {
                resultDiv.textContent = "Correct answer"
                this.checkAnswer(i);
            }.bind(this))*/

            element.addEventListener('click', () => {
                this.checkAnswer(i);
            })
        }

        this.updateState()

        this.showQuestion(questions[this.currentPosition])
    },
    showQuestion: function (item) {
        // keep track of the current question

        // this.currentQuestion = item

        // 1. select dom element
        let titleDiv = document.getElementById('title')
        // let resultDiv = document.getElementById('result')

        // 2. modify div
        titleDiv.textContent = item.title

        const alternativeElements = document.getElementsByClassName('alternative')

        for (let i = 0; i < alternativeElements.length; i++) {
            const element = alternativeElements[i]
            element.textContent = item.alternatives[i]
        }
    },
    checkAnswer: function (userSelected) {
        let currentQuestion = questions[this.currentPosition];
        if (currentQuestion.correctAnswer === userSelected) {
            console.log('Correct')
            this.score++;
            this.showResult(true)
        } else {
            console.log('wrong')
            this.showResult(false)
        }
        // refresh state
        this.updateState()
        // increase position
        this.increasePosition();

        // show next question
        this.showQuestion(questions[this.currentPosition])
    },
    increasePosition: function() {
        this.currentPosition++;

        if (this.currentPosition === questions.length) {
            this.currentPosition = 0;
        }
    },
    updateState: function() {
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Your score: ${this.score}`;
    },
    showResult: function(isCorrect) {
        let resultDiv = document.getElementById('result')
        let result = ``;

        //checks
        if (isCorrect) {
            result = 'Correct Answer!'
        } else {
            let currentQuestion = questions[this.currentPosition];

            // get correct answer (index)
            let correctAnswindex = currentQuestion.correctAnswer;

            // get correct answer
            let correctAnwsText = currentQuestion.alternatives[correctAnswindex];



            result = `Wrong!! Correct answer: ${correctAnwsText}`;
        }

        resultDiv.textContent = result;
    }
};

app.start()

const btnElement = document.getElementById("btn")

btnElement.addEventListener("click", function() {

})





