const form = document.querySelector(".quiz-form");
form.addEventListener("submit", evt => {
    evt.preventDefault();
    let correctAnswer = []; // arreglo de respuestas correctas
    const userAnswers = []; // arreglo de seleccion del usuario
    const result = document.querySelector(".result");
    const questions = document.querySelectorAll(".question");
    const options = document.querySelectorAll("input[type='radio']");
    const setAnswers = new Set();
    options.forEach(element => {
        setAnswers.add(element.getAttribute("name"));
    })

    setAnswers.forEach((name, index) => {
        userAnswers.push(form[name].value);
    })

    // opciones disponibles en el formulario
    const optionsLetters = ["A", "B", "C", "D"];

    // obtiene la cantidad de preguntas
    const length = questions.length;

    // rellena el arreglo de respuestas correctas
    for (let i = 0; i < length; i++) {
        correctAnswer.push(optionsLetters[parseInt((Math.random() * optionsLetters.length).toString())]);
    }


    let score = 0;
    // correctAnswer = ["A", "A", "A", "A", "A", "A"];


    userAnswers.forEach((answer, index) => {
        let element =  questions[index];
        if (answer === correctAnswer[index]) {
            score++;
            if (element.classList.contains("wrong")) {
                element.classList.remove("wrong");
            }
            element.classList.add("correct");
        } else {
            if (element.classList.contains("correct")) {
                element.classList.remove("correct");
            }
            element.classList.add("wrong")
        }
    })

    scrollTo(0, 0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `Your Score is ${score}/${length} = ${((score / length) * 100).toFixed(2)}%`;
    console.log(result.querySelector("p").textContent);
})