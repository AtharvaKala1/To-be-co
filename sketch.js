const startButton = document.getElementById('start-btn')
const classButton = document.getElementById('class-btn')
const questionContainerElement = document.getElementById('question-container')
const subjectContainerElement = document.getElementById('class-subjectContainer')


startButton.addEventListener('click', startApp)
classButton.addEventListener('click', classApp)

function startApp() {
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
}

function classApp() {
classButton.classList.add('hide')
subjectContainerElement.classList.remove('hide')
}
