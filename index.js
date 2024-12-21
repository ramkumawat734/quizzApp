
const quiz = [
    {
        question: "who  is your favorite dost",
        ans1text: "ram",
        ans2text: "zatu  bhai",
        ans3text: "satish sethi",
        ans4text: "koi nahi hai",
        answer: "ram",

    }
    ,
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
    
]

let question = document.getElementById("quiz-question");
let option_a = document.getElementById("text_option_a");
let option_b = document.getElementById("text_option_b");
let option_c = document.getElementById("text_option_c");
let option_d = document.getElementById("text_option_d");


let currentQuestion = 0;
let score  =0;

console.log(quiz[currentQuestion]);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


const submit = document.getElementById("submit");

submit.addEventListener("click", () => {


    const checkedAns = document.querySelector('input[type="radio"]:checked')

    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
                        alert(`Your score is  ${score} out of   ${quiz.length}
         right answer: 
        1.ram , 
        2.JavaScript
        3.joe biden
        4."Hypertext Markup Language
        5.1995`  );
            location.reload();
        }

    }
});