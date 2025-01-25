let questions  =  {
    "SHOWING QNO 1":{
        "option 1":"correct",
        "option 2":"Incorrect"
    },
    "SHOWING QNO 2":{
        "option 3":"correct",
        "option 4":"Incorrect"
    },
    "SHOWING QNO 3":{
        "option 5":"correct",
        "option 6":"Incorrect"
    },

}


function getKey(index=0,inner=false){

    if(inner){

        return questions[Object.keys(questions)[index]]

    }

    return Object.keys(questions)[index]

}



function calculateScore(values=['option 1','option 4','option 5']){

    let score  = 0;
for(let i = 0; i < Object.keys(questions).length; i++) {
   let correctOption  = getKey(index=i,inner=true);

   if(correctOption[values[i]] == 'correct'){
    score += 1
   }
    
}

console.log(score)

}


calculateScore()




