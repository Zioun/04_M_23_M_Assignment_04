function checkName(name) {
    if(typeof name === "string"){
        let xyz = name.slice(-1);
        if(xyz === 'A' || xyz === 'a' || xyz === 'Y' || xyz === 'y' || xyz === 'I' || xyz === 'i' || xyz === 'E' || xyz === 'e' || xyz === 'O' || xyz === 'o' || xyz === 'U' || xyz === 'u' || xyz === 'W' || xyz === 'w'){
            return "Good Name";
        }else{
            return "Bad Name"
        }
        
    }else{
        return "invalid";
    }
}
    
let result = checkName("Abdullah");
console.log(result);