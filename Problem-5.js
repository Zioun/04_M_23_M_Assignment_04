
function monthlySavings(arr , livingCost) {
    if(typeof arr !== Array.isArray && typeof livingCost !== "number"){
        return "invalid input";
    }
    let amount = 0;
    for(let item of arr){
        if(item >= 3000){
            let taxCalulate = item / 100 * 20;
            let minusTax = item - taxCalulate;
            amount += minusTax;
        }else{
            amount += item;
        }
    }
    let savings = amount - livingCost;
    if(savings < 0){
        return "Earn More";
    }
    return savings; 
}
