


let tablinks = document.querySelectorAll(".tablinks");
let tabcontent = document.getElementById("content");



for (let k  of tabcontent.children) {
    k.style.display = "none";

}   // initially all content is hidden


function showTab(e) {


    for (let k  of tabcontent.children) {
        k.style.display = "none";

    } // when a particular tab is clicked all content should display none   but , 

    for(let k = 0 ; k  < tablinks.length; k++){   // just css ignore
        tablinks[k].style.backgroundColor = "black"
        tablinks[k].style.color = "#3aeb34"
    }
  




    let content_classname = e.currentTarget.classList[1];
    document.getElementById(content_classname).style.display = "block";  //  but , current tab should display block 
    e.currentTarget.style.backgroundColor = "#00ffff"
    e.currentTarget.style.color = "red"
    console.log(content_classname)
    //content[0].style.display = "block";





}

for (let k of tablinks) {   // all tabs have show tab functionality 
    k.addEventListener("click", showTab, false);
}







