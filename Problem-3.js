let array = {num: [ 1 , 2 , 3 ]};
function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return "Invalid Array";
    }
    let store = [];
    for(let item of array){
        if(typeof item === "number" && !isNaN(item)){
            store.push(item);
        }else{
            return "Invalid Array";
        }   
    }
    return store;
}
let result = deleteInvalids(array);
console.log(result);