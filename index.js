const  readlineSync = require('readline-sync')

let score=0;
const questions =[
	{
		question:"Advitya's full name",
		answer:"Advitya sharma",
		a:"Advitya gupta",
		b:"Advitya pratap",
		c:"Advitya singh",
		d:"Advitya sharma",
	},
	{
		question:"Advitya's State/UT",
		answer:"J&K",
		a:"Punjab",
		b:"Dehli",
		c:"J&K",
		d:"Himachal pradesh",
	},
	{
		question:"Advitya's college name",
		answer:"LPU",
		a:"LPU",
		b:"CU",
		c:"JNU",
		d:"AU",
	},
	{
		question:"Advitya's UG program",
		answer:"BCA",
		a:"Btech",
		b:"BCA",
		c:"BBA",
		d:"BSC",
	},
	{
		question:"Advitya's favorite fast food",
		answer:"momos",
		a:"momos",
		b:"pizza",
		c:"pasta",
		d:"burger",
	}
]

var highScores=[
  {
    name:"Advitya",
    score:5
  },
  {
    name:"Tanmay",
    score:4
  },
  {
    name:"Rahul",
    score:3
  }
];
console.log("welcome to Advitya's quiz\n")
const name =  readlineSync.question("whats's your name ")

const askQuestion = function(questions){
	
	for(i=0;i<=4;i++){

		console.log(questions[i].question+":\n");
		console.log("a> "+questions[i].a);
		console.log("b> "+questions[i].b);
		console.log("c> "+questions[i].c);
		console.log("d> "+questions[i].d);

	const input =readlineSync.question("select your answer: \npress e to exit: ")

	if(input.toLowerCase() == 'e'){
		console.log("stopped")
		process.exit()
	}

	scoreCalc(questions[i][input.toLowerCase()],questions[i].answer)
	}
	
}

const scoreCalc = function(input,correct){
	
	if(input === correct){
		console.log("\ncorrect answer");
		score+=1;
	}
	else{
		console.log("\nincorrect answer")
	}
}

const highscoreCalc = function(highScores,score,name){
	
	console.log(`name: ${name}`)
	console.log(`score: ${score}`)

	if(score === 5){
		console.log("\nyou have highest score\n")
	}
	else{
		for(i=0;i<highScores.length;i++){
			
			if(highScores[i].score<=score){
				console.log('\nyou are in top 3 highscorers \n')
				break;
			}
		}

	}
}
askQuestion(questions);
highscoreCalc(highScores,score,name);
