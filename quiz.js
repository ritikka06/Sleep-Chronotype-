(function() {
    const quizContainer = document.getElementById('quiz');
    const outputContainer = document.getElementById('output');
    const submitButton = document.getElementById('submit');

    const myQuestions = [
        {
            question: "Are you a heavy sleeper?",
            answers: {
                a: "True",
                b: "False",
                c: "Cannot say for sure."
            },
            results: {
                a: "External factors don't affect your sleep.",
                b: "External noises affect you.",
                c: "You are quite distracted."
            }
        },
        {
            question: "Do you deal with Insomnia?",
            answers: {
                a: "True",
                b: "False",
                c: "Not sure"
            },
            results: {
                a: "You are more alert in evening time and struggle going to bed at conventional time.",
                b: "You can relax as soon as you get in your bed at the conventional time.",
                c: "You might suffer with insomnia."
            }
        },
        {
            question: "Do you feel energized when you wake up?",
            answers: {
                a: "No",
                b: "Yes",
                c: "Sometimes"
            },
            results: {
                a: "You need time with yourself before you start your day. You are a Night Owl",
                b: "You are all ready to tackle your to-do list for your day. You are an Early Birl.",
                c: "You are energized sometimes, and sometimes you are not. You have an Intermediate Chronotype."
            }
        }
    ];

    function buildQuiz() {
        const output = [];

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        let finalResults = "";
        const answerContainers = quizContainer.querySelectorAll('.answers');

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer) {
                finalResults += currentQuestion.results[userAnswer] + "<br>";
            } else {
                finalResults += "No answer selected.<br>";
            }
        });

        outputContainer.innerHTML = finalResults;
    }

    buildQuiz();

    submitButton.addEventListener('click', showResults);
})();
