
var optionsEl = document.getElementById("options");
var startButtonEl = document.getElementById("start");
var questionsEl = document.getElementById("questions");

var option1El = document.getElementById("op1");
var option2El = document.getElementById("op2");
var option3El = document.getElementById("op3");
var option4El = document.getElementById("op4");
var nextButtonEl = document.getElementById("next");
var timerEl = document.getElementById("timer");



var showQ = 0;



//hide options



function timer(){
    var sec = 59;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
    console.log(sec);
}



// console.log(showQ);

// var countdown = setInterval(function() {
// timerEl.innerHTML='00:'+sec;
// sec--;

    
// },60000);
//  console.log(countdown);


// for(i=0; optionsEl.length > i; i++){

//     optionsEl[i].style.display = "none";
// }

//start timer and hide button and ready message
function startTimer (){

     
    startButtonEl.addEventListener("click", hideStart);
    console.log("hidestart function");
        
    

}

//start timer and hide button and ready message
function hideStart(){
    
    timer(); 
    startButtonEl.style.display = "none";
    questionsEl.style.display = "block";
   // showQ =+ 1;
   console.log("on click");
    
    
   showQuestions();


}


//show first question


function showQuestions(){

//for(i=0; i < 5 ; i++ ){

//var i = 0;

    for(i=0; i < 5; i++) {
    questionsEl.textContent = questions[i].q;
    option1El.innerHTML = questions[i].options[0];
    option2El.innerHTML = questions[i].options[1];
    option3El.innerHTML = questions[i].options[2];
    option4El.innerHTML = questions[i].options[3];


   nextButtonEl.addEventListener("click", function(){

    //i++;
        console.log(i); 
   

    // if(questions[i].a == questions[i].options[0]){
    //     option1El.style.backgroundColor = "green";
    // }else if (questions[i].a == questions[i].options[1]) {
    //     option2El.style.backgroundColor = "green";
    // }else if (questions[i].a == questions[i].options[2]){
    //     option3El.style.backgroundColor = "green";
    // }else if (questions[i].a == questions[i].options[3]){
    //     option4El.style.backgroundColor = "green";
    

    console.log(questions[i].a);
    console.log(questions[i].options[0]);

    i++;
});



    option1El.addEventListener("click", function(){
        if(questions[i].a == questions[i].options[0]){
            option1El.style.backgroundColor = "green";
        } else {
            option1El.style.backgroundColor = "red";
        }
    });



    option2El.addEventListener("click", function(){
        
        if (questions[i].a == questions[i].options[1]) {
            option2El.style.backgroundColor = "green";
        }else {
            option2El.style.backgroundColor = "red";
        }

    });



    option3El.addEventListener("click", function(){
        
        if (questions[i].a == questions[i].options[2]){
            option3El.style.backgroundColor = "green";
        }else {
            option3El.style.backgroundColor = "red";
        }

    });


    option4El.addEventListener("click", function(){
        
        if (questions[i].a == questions[i].options[3]){
            option4El.style.backgroundColor = "green";
        }else {
            option4El.style.backgroundColor = "red";
        }

    });
      



    //     option4El.addEventListener("click", function(){
    //         if(questions[i].a == questions[i].options[0]){
    //             option1El.style.backgroundColor = "green";
    //         }else if (questions[i].a == questions[i].options[1]) {
    //             option2El.style.backgroundColor = "green";
    //         }else if (questions[i].a == questions[i].options[2]){
    //             option3El.style.backgroundColor = "green";
    //         }else if (questions[i].a == questions[i].options[3]){
    //             option4El.style.backgroundColor = "green";
    //         } 
    
    //     });
    // });
//}




// var i =0;
//     questionsEl.textContent = questions[i].q;
//     option1El.innerHTML = questions[i].options[i];
//     option2El.innerHTML = questions[i+1].options[i+1];
//     option3El.innerHTML = questions[i+2].options[i+2];
//     option4El.innerHTML = questions[i+3].options[i+3];


//     nextButtonEl.addEventListener("click", function(){

//         i++;
//         console.log(i); 
//     } );
    
    


  

    // for(i=0; i <test.length; i++){
    //     //remember 3 steps to show append...somethin something

    // }
//}

//console.log(i);



}


// if (showQ == 0) {
//     optionsEl.style.display = "none";
// }





startTimer();

console.log(showQ);








// var quizContainer = document.getElementsByClassName('quiz');
// var answerContainer = document.getElementsByClassName('answer');
// var submitButton = document.getElementsByClassName('submit');


//var test =  [Question1, Question2, Question3];




var questions = [
    {
    id: 1,
    q: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    id: 2,
    q: "What does CSS stand for?",
    a: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    id: 3,
    q: "What does PHP stand for?",
    a: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    id: 4,
    q: "What does SQL stand for?",
    a: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    id: 5,
    q: "What does XML stand for?",
    a: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },

];

}
















// //create array of questions


// var questions = [
//     {
//     id: 1,
//     q: "What does HTML stand for?",
//     a: "Hyper Text Markup Language",
//     options: [
//       "Hyper Text Preprocessor",
//       "Hyper Text Markup Language",
//       "Hyper Text Multiple Language",
//       "Hyper Tool Multi Language"
//     ]
//   },
//     {
//     id: 2,
//     q: "What does CSS stand for?",
//     a: "Cascading Style Sheet",
//     options: [
//       "Common Style Sheet",
//       "Colorful Style Sheet",
//       "Computer Style Sheet",
//       "Cascading Style Sheet"
//     ]
//   },
//     {
//     id: 3,
//     q: "What does PHP stand for?",
//     a: "Hypertext Preprocessor",
//     options: [
//       "Hypertext Preprocessor",
//       "Hypertext Programming",
//       "Hypertext Preprogramming",
//       "Hometext Preprocessor"
//     ]
//   },
//     {
//     id: 4,
//     q: "What does SQL stand for?",
//     a: "Structured Query Language",
//     options: [
//       "Stylish Question Language",
//       "Stylesheet Query Language",
//       "Statement Question Language",
//       "Structured Query Language"
//     ]
//   },
//     {
//     id: 5,
//     q: "What does XML stand for?",
//     a: "eXtensible Markup Language",
//     options: [
//       "eXtensible Markup Language",
//       "eXecutable Multiple Language",
//       "eXTra Multi-Program Language",
//       "eXamine Multiple Language"
//     ]
//   },

// ];

// var start = true;

// function askQuestion {

//     //get the answer from html
//     var answer = document.getElementsByClassName("answer");
//     answer[0].innertext ="";

//     //get question
//     var question = document.getElementById("question");

//     //set question text
//     question.innertext = questions[id].q;

//     //get question options

//     op1.innertext = questions[id].a[0].text;
//     op2.innertext = questions[id].a[1].text;
//     op3.innertext = questions[id].a[2].text;
//     op4.innertext = questions[id].a[3].text;



