let month_wise_values = {}
let values  = [31,30,31,30,31,30,31,31,30,31,30,31]

for(let i =0 ;i < 12;i++){
    month_wise_values[i] =  values[i]
}




function count_year(sample_date="2007-05-19"){

    let today = new Date();
    let dob  = new Date(sample_date);
    let years = today.getFullYear()  -  dob.getFullYear();
    let months  =  today.getMonth()  -  dob.getMonth();
    let days =  today.getDate() -  dob.getDate();

    if (months >= 0  && days > 0){
        return  [years,months,days ] 
    }

    if (months < 0 && days > 0){
        years =  years -1 
        months  =  months + 12
        return  [years,months,days ] 

    }

    if (months < 0  && days< 0){
        years =  years -1 
        months =  months  +  11;  // 12-1  12 :  saal ke 12 maas and -1 : ek mahine ko days mei de diya na
        days  =  days +  month_wise_values[today.getMonth()]
        return  [years,months,days ] 

    }

}

let dob = document.getElementById("dob");
let btn = document.getElementById("btn");
let years =  document.getElementById("years");
let months =  document.getElementById("months");
let days =  document.getElementById("days");


btn.addEventListener('click',function(){


    values  = count_year(dob.value);
    years.innerHTML =  String(values[0]);
    months.innerHTML =  String(values[1]);
    days.innerHTML =  String(values[2]);

    
})