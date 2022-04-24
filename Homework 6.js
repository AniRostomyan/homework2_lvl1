//EX.1
function sortingViolation(arr){
    for(let i = 1; i < arr.length ; i++){
        if(arr[i - 1] > arr[i]){
            return i;
        }
    }
    return -1;
}
//EX.2
function sumOfElem(arr){
    return arr.map( elem =>{
        let sum = 0;
        for(let i = 0; i < elem.length; i++){
            sum += elem[i]
        }
        return sum;
    })
}
//EX.3
function oddXlength(arr){
    const result = arr.filter(elem => elem % 2)
    return result.map(elem => elem * result.length)
}
//EX.4
function sumOfDigits(num){
    if(num < 10 && num > -10){
        return num;
    }
    let sum = 0;
    while(num !== 0){
        const lastDigit = num % 10
        sum += lastDigit;
        num = Math.trunc(num / 10);
        
    }
    const result = sumOfDigits(sum);
    return result;
 }
//EX. 5
function fibonacci(num){
  switch(num){
      case 0 || undefined: return [];
      case 1: return [0];
      case 2: return [0, 1];
      default: {
           let result = [0, 1]; 
           for(let i = 1; i < num; i++) {
               result.push(result[i] + result[i - 1])
           }
           return result;
    } 
  }   
}
