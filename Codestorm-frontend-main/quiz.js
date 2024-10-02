const quizData = [
	{
question: " What do you imagine yourself building or creating as an engineer?", options: [
"Advanced software applications",
"Innovative product designs",
"Eco-friendly infrastructure",
"High-performance machines or vehicles",
],
}, {
question:
"What type of problems do you enjoy solving the most?", options: ["Mathematical and analytical problems", " Design and creativity challenges", "Environmental and sustainability issues", "Mechanical and technical puzzles"],

},
{
question:
"Which subject in school or college do you excel in?",
options: [
" Mathematics and physics", "Art and design", "Biology and environmental science",
"Mechanics and technical courses",
],


},
{
question:
"What kind of projects or hobbies do you find most engaging?",
options: ["Building and programming robots", "Creating digital art and animations", "Developing sustainable energy solutions", "Working on cars or machines"], correct: 0,
},
{
question: "What future technology trends interest you the most?",
options: ["Artificial intelligence and data science", "Virtual reality and user experience design", "Renewable energy and environmental tech", " Aerospace and aviation innovations"],

},
{
  question: "How do you prefer to work in a team?",
  options: ["As the problem-solving expert", "As the creative and design lead", "As the sustainability advocate", "As the technical expert"],
  
  },
{
  question: "How important is it for you to see tangible results in your work?",
  options: ["Extremely important", "Somewhat important", "Moderately important", "Not very important"],
  
  },
  {
    question: "What industries or applications are you most passionate about?",
    options: ["Technology and software development", "Art and entertainment technology", "Environmental and renewable energy", "Automotive and mechanical engineering"],
    
    },
  {
      question: "Do you prefer working on small-scale or large-scale projects?",
      options: ["Small-scale, precise projects", " Large-scale, innovative projects", "Large-scale projects with environmental impact", "Large-scale projects involving machinery"],
      
   },
   {
    question: "What is your ultimate career goal as an engineer?",
    options: ["Innovating in the tech industry", "Becoming a renowned design expert", "Leading sustainability initiatives", "Engineering groundbreaking machinery"],
    
 },
];

const quiz = document.querySelector("#quiz");
const scores = document.querySelector(".score");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_l, option_2, option_3, option_4] =
       document.querySelectorAll(
"#question, .option_l, .option_2, .option_3, .option_4 "

);

 const submitBtn = document.querySelector("#submit");

   let currentQuiz = 0;
   let score = 0;
   // Courses based on the score
const courses = [
  "Software Engineering",
  "Civil Engineering",
  "Environmental Engineering",
  "Mechanical Engineering",
];

const suggestedCourseElm = document.querySelector(".suggested-course");


   //? Step 3: Load Quiz Function

   const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];

    console.log(options);
    questionElm.innerText = `${currentQuiz + 1}: ${question}`;

    // Remove the "Score" display
    scores.innerText = '';

    const optionElements = document.querySelectorAll(".option");
    optionElements.forEach((optionElement, index) => {
        optionElement.innerText = options[index];
    });
};

loadQuiz();

const getSelectedOption = () => {
    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
};

   // deselectedAnswers

 const deselectedAnswers =()=>{
return answerElm.forEach((curElem) => (curElem.checked = false)); };

   submitBtn.addEventListener("click", ()=>{
 const selectedOptionlndex = getSelectedOption();

console.log(selectedOptionlndex);
if (selectedOptionlndex=== quizData[currentQuiz].correct) {

score = score + 1;
}
   currentQuiz++;

   if (currentQuiz < quizData.length) {
    deselectedAnswers();
    loadQuiz();
  } else {
    const maxScore=quizData.length;
    const percentageScore=(score/maxScore)*100;
    let suggestedCourse = "Undecided";
    if (percentageScore >= 80) {
      suggestedCourse = courses[0];
    } else if (percentageScore >= 60) {
      suggestedCourse = courses[1];
    } else if (percentageScore >= 40) {
      suggestedCourse = courses[2];
    } else {
      suggestedCourse = courses[3];
    }

    // Display the suggested course
    quiz.innerHTML = `
      <div class="result">
        <p>Your suggested course is:</p>
        <h2 class="suggested-course">${suggestedCourse}</h2>
        <button class="reload-button" onclick="location.reload()">Retake the test</button>
      </div>`;
  }
  
});
