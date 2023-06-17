var questions = [
    {
        question: "Html stands for ?",
        option: ["hyper markup", "JS", "hyper text markup language", "cascading style sheet"],
        correctAns: "hyper text markup language"
    },
    {
        question: "JS stands for ?",
        option: ["java script", "hyper text markup language", "css", "html"],
        correctAns: "java script"
    },
    {
        question: "CSS stands for ?",
        option: ["cascading style sheet", "hyper text markup language", "Java Script", "html"],
        correctAns: "cascading style sheet"
    },

    {
        question: "RAM stands for ?",
        option: ["random access memoery", "hyper text markup language", "html", "html"],
        correctAns: "random access memoery"
    },
    {
        question: "ROM stands for ?",
        option: ["read only memory", "hyper text markup language", "html", "html"],
        correctAns: "read only memory"
    }
]

var currentNo = document.getElementById("currentQue")
var totalNo = document.getElementById("totalQue")
var answerNo = document.getElementById("answer")
var questionNo = document.getElementById("question")
var indexVal = 0
var marks = 0
var showMark = "Your Quiz has Complete and Your Marks is"
function render() {
    var obj = questions[indexVal]
    questionNo.innerHTML = obj.question
    currentNo.innerHTML = indexVal + 1
    totalNo.innerHTML = questions.length
    answerNo.innerHTML = ""
    for (var i = 0; i < obj.option.length; i++) {
        answerNo.innerHTML +=
            `
    <button  class="mt-3  w-50 btn btn-outline-success" onclick = "correct('${obj.correctAns}','${obj.option[i]}')" >${obj.option[i]}</button><br>
`
    }
}
render()
function next() {
    if (indexVal + 1 == questions.length) {
        alert(showMark + " " + marks)
        marks = 0
        indexVal = 0
        render()
    }
    else{
        indexVal++
        render()
    } 
    
}

function correct(a, b) {
    if (a == b) {
        marks = marks + 1
    }
    next()
    console.log(marks)
} 
