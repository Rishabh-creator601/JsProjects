

let month_wise_values = {}
let values  = [31,30,31,30,31,30,31,31,30,31,30,31]

for(let i =0 ;i < 12;i++){
    month_wise_values[i] =  values[i]
}



let sample_date  = '2009-01-18'


    let today = new Date();
    let dob  = new Date(sample_date);
    let years = today.getFullYear()  -  dob.getFullYear();
    let months  =  today.getMonth()  -  dob.getMonth();
    let days =  today.getDate() -  dob.getDate();


    console.log(years,months,days)

    if (months >= 0  && days > 0){
        console.log( [years,months,days ] )
    }

    if (months <= 0 && days > 0){
        years =  years -1 
        months  =  months + 12
        console.log([years,months,days])

    }

    if (months <= 0  && days< 0){
        years =  years -1 
        months =  months  +  11;  // 12-1  12 :  saal ke 12 maas and -1 : ek mahine ko days mei de diya na
        days  =  days +  month_wise_values[today.getMonth()]
        console.log([years,months,days])

    }



