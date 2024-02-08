let info = { name: "toky" , birthYear: 200, siteName: "Facebook" }
function password(obj) {
    let lengthOfString = info.birthYear.toString().length;
    if(typeof obj.name === "string" && typeof obj.birthYear === "number" && typeof obj.siteName === "string" && lengthOfString > 3 && lengthOfString < 5){
        let upperCase = obj.siteName[0].toUpperCase();
        let lowerCase = obj.siteName.slice(1);
        let adjust = upperCase + lowerCase;
        return adjust+"#"+obj.name.toLowerCase()+"@"+obj.birthYear;
    }else{
        return "invalid";
    }
}
let result = password(info);
console.log(result);


