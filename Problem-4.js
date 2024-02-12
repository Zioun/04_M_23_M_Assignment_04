let obj = { name: "kolimuddin" , birthYear: 1999 , siteName: "google" }
function password(obj) {
    let lengthOfString = obj.birthYear.toString().length;
    if(typeof obj.name === "string" && typeof obj.birthYear === "number" && typeof obj.siteName === "string" && lengthOfString > 3 && lengthOfString < 5){
        let upperCase = obj.siteName[0].toUpperCase();
        let lowerCase = obj.siteName.slice(1);
        let adjust = upperCase + lowerCase;
        return adjust+"#"+obj.name.toLowerCase()+"@"+obj.birthYear;
    }else{
        return "invalid";
    }
}
let result = password(obj);
console.log(result)


