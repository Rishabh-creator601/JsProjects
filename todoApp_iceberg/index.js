
function reverse_(current,TrueValue,FalseValue){
  
    let values = {}
    values[true] = TrueValue
    values[false] = FalseValue
    let currentKey = Object.keys(values).find(key => values[key] == current) == "true" ? true : false
    
    return values[!currentKey]
    
 
 }





let todo = document.getElementById("todo");
let btn = document.getElementById("btn");
let display = document.getElementById("display");
let cross = document.getElementById('cross');
let edit = document.getElementById("edit");


//KEYPRESS ENTER EVENT ||  ADD TODO ON ENTER 
todo.addEventListener("keypress", function (event) {

    if (event.key == 'Enter') {
        event.preventDefault()
        btn.click();
    }
})



btn.addEventListener("click", function () {
    let todoValue = todo.value;
    //let flag= false ;

    todo.value = "";

    let todoItem = document.createElement('li');
    todoItem.innerHTML = `<span id='data'> ${todoValue} </span> <button id='cross'> X </button> <button id='done'> ✔ </button> <button id='edit'>Edit </button>`
    display.appendChild(todoItem);

    display.addEventListener('click', function (e) {
        if (e.target.getAttribute('id') == 'cross') {
            e.target.parentNode.remove()
        }

        if (e.target.getAttribute('id') == 'done') {
            // if (e.target.parentNode.classList.contains('donecut')) {
            //     e.target.parentNode.classList.remove("donecut")
            //     e.target.parentNode.style.backgroundColor = "red"
            // }

            // else {
            //     e.target.parentNode.classList.add("donecut");
            //     console.log(e.target.parentNode);
            //     e.target.parentNode.style.backgroundColor = "green"

            // }

            let textdata = e.target.parentNode.querySelector("#data");

            textdata.style.textDecoration =  reverse_(textdata.style.textDecoration,TrueValue="line-through","");
            e.target.parentNode.style.backgroundColor=  reverse_(e.target.parentNode.style.backgroundColor,TrueValue="green","red");
            
            // flag = !flag;
            // if (flag){
            //     textdata.style.textDecoration = "line-through";
            //      e.target.parentNode.style.backgroundColor = "green"
            //      console.log(textdata.style.textDecoration)

            // }
            // else{
            //     textdata.style.textDecoration =  null;
            //     console.log(textdata.style.textDecoration=="")
            //      e.target.parentNode.style.backgroundColor = "red"
            // }
            



        }


        if (e.target.getAttribute("id") == 'edit') {
            let todoPrevValue = e.target.parentNode.querySelector("#data").textContent;
            let newValue = prompt("Enter the new Value", todoPrevValue);
            if (newValue != "" || newValue != null) {
                e.target.parentNode.querySelector("#data").innerHTML = newValue
            }

            else {
                alert("Please enter a non null value ")
            }

        }
    })



})








