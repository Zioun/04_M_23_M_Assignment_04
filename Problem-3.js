function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return "Invalid Array";
    }
    let store = [];
    for(let item of array){
        if(typeof item === "number" && !isNaN(item)){
            store.push(item);
        }  
    }
    return store;
}