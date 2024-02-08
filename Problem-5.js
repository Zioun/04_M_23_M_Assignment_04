function monthlySavings(arr , livingCost) {
    let sum = 0;
    for(let item of arr){
        sum += item;
    }
    let cost = sum - livingCost;
    console.log(cost)
    if(sum >= 3000){
        let tax = sum / 100 * 20;
        console.log(tax)
        // let savings = cost - tax;
        // console.log(savings);
    }
}
let earn = [ 1000 , 2000 , 3000 ];
let livingCost = 5400;

let result = monthlySavings(earn, livingCost);
console.log(result);
