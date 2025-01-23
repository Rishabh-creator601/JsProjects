let txtarea  =  document.getElementById("txt");
let display = document.getElementsByClassName("result");

let more  = document.getElementById("properties_cont");
let prop_btn = document.getElementById("prop_btn")

function count_char(string_,char_){

    let count = 0;

    for (let i = 0; i < string_.length; i++){
        if(string_[i] ==  char_){
            count++;
        }

    }


    return count;
}


function  count_chars(string_){
    let special_chars = "!@#$%^&*";
    let count  = 0;

    for (let i  = 0; i <  special_chars.length; i++){

        count +=  count_char(string_,special_chars[i])

    }

    return count 
}










txtarea.addEventListener("input",function(){

    let cont  = txtarea.value.trim();
    let length_ = cont.split(" ").join('').length;
    document.querySelector(".charCount").innerHTML = `N Characters (without space) : ${length_}`
    document.querySelector(".specialCount").innerHTML = `Special Characters : ${count_chars(cont)}`

    


    
})