const quizData = [{
        question: 'How old is Florin',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'What was the most used programming language in 2019',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'Who is the current President of USA?',
        a: 'Donald Trump',
        b: 'Joe Biden',
        c: 'Barack Obama',
        d: 'Gabriel Mugabe',
        correct: 'b'
    },
    {
        question: 'In which year was JavaScript launched?',
        a: '1996',
        b: 'none',
        c: '1994',
        d: '1995',
        correct: 'd'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'JavaScript Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    }
]


const questionEl = document.getElementById("question")
const quiz = document.getElementById("quiz")

const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")

const submitBtn = document.getElementById("submit")

const answersEl = document.querySelectorAll('.answer')

let currentQuiz = 0
let answer = undefined
let score = 0

const loadQuiz = () => {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

const getSelected = () => {
    answersEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

const deselectAnswers = () => {
    answersEl.forEach((answerEl) => {
        answerEl.checked = false
    })
}

loadQuiz()

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected()

    console.log(answer)

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            // ToDo : Show Results

            // alert('You Finished! Get Yourself A Break')

            quiz.innerHTML = `<h2>You Answered Correctly at ${score} / ${quizData.length} questions.</h2>
            <button onclick='location.reload()'>Reload</button>`
        }
    }
})