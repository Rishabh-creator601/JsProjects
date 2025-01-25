
let Q  = document.querySelector("#Q");
let btn = document.getElementById("btn")
let options  = document.getElementById("options")
let Qn  = 0;
let questions  =  {
    "Who discovered that the Earth revolves around the sun ?":{
        "Nicolaus Copernicus":"correct",
        "Galio Galeo ":"Incorrect",
        "Albert enstien":"Incorrect"
    },
    "Which country drinks the most coffee per capita?":{
         "Finland":"correct",
        "India":"Incorrect",
        "America":"Incorect",

    },
    "Where did sushi originate?":{
        "Japan":"correct",
        "New Zealand":"Incorrect"
    },

}

localStorage.clear()


function getKey(index=0,inner=false){

    if(inner){

        return questions[Object.keys(questions)[index]]

    }

    return Object.keys(questions)[index]

}



// service to display the question and options given 
function displayQSet(question,options_){



    options.innerHTML = ''


    Q.innerHTML =  question;

    for(let i = 0; i < options_.length;i++){
        let li = document.createElement("li");


        li.innerHTML = `<input type='checkbox' value='${options_[i]}' /> <span> ${options_[i]} </span>`
        
        options.appendChild(li)
        
    }
}



function calculateScore(values=['option 1','option 4','option 5']){

    let score  = 0;
for(let i = 0; i < Object.keys(questions).length; i++) {
   let correctOption  = getKey(index=i,inner=true);

//    console.log(correctOption)
//    console.log(values[i])

   if(correctOption[values[i]] == 'correct'){
    score += 1
   }
    
}

return score;


}



// service to select only one option 
// uncheck all but check only selected one 
options.addEventListener("change",function(e){
    console.log(e.target.value)


    let elements  =   [...e.target.parentNode.parentNode.querySelectorAll("input[type=checkbox")]
    elements.forEach(element => {
        

        element.checked = false;
        element.parentNode.style.backgroundColor = "white";
    });

    
    
    for(let i of elements){
        if(i.value==e.target.value){
            i.checked = true;
            i.parentNode.style.backgroundColor = "lightgreen"
        }
    }

    localStorage.setItem(Qn -1 ,e.target.value)
    


})




btn.addEventListener("click",()=>{
    btn.textContent = "Submit >";
    
    if(Qn  >  Object.keys(questions).length -1){

        options.innerHTML =''

        let marked  = []

        for(let i = 0; i < Object.keys(questions).length;i++){
            marked.push(localStorage.getItem(i))
        }

        Q.innerHTML =  `<center> Score : ${calculateScore(marked)}/${Object.keys(questions).length} </center>`
        Qn  = 0;
        btn.textContent = "Restart ";
        localStorage.clear()


    }


    else{
        let Question  = Object.keys(questions)[Qn]
        let options_ = Object.keys(getKey(index=Qn,inner=true) )
        displayQSet(Question,options_)
         
        Qn  = Qn + 1;
    }




 
})










   
    

    

    

    

