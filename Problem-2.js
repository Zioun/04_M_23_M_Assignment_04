function checkName(name) {
    if(typeof name === "string"){
        let xyz = name.slice(-1).toLowerCase();
        
        if(xyz === 'a' || xyz === 'y' || xyz === 'i' || xyz === 'e' || xyz === 'o' || xyz === 'u' || xyz === 'w'){
            return "Good Name";
        }else{
            return "Bad Name"
        }
        
    }else{
        return "invalid";
    }
}

console.log(checkName('Sadia'));