

class array_list{
    
    constructor(){
        this.array  =  ['item1','item2'];
    }

    addEl(el){
        this.array.push(el);

    }

    removeEl(el){
        this.array = this.array.filter(item =>  item !== el)
    }

    displayEl(){
         for(let k of this.array){
            console.log(k)
         }
    }

}



// reverse a value 

function reverse_(current,TrueValue,FalseValue){
  
   let values = {}
   values[true] = TrueValue
   values[false] = FalseValue
   let currentKey = Object.keys(values).find(key => values[key] == current) == "true" ? true : false
   
   return values[!currentKey]
   

}
