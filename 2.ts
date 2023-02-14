let UName = "Ubaid ur rehman";
console.log("myName->"+UName);
console.log("myName-> " + UName.toUpperCase());
console.log("myName-> " + UName.toLowerCase());
 console.log("title-> " + titleCase(UName));


 function titleCase(str:String ){
    var nArr = str.toLowerCase().split(' '); // how to convert string into an array
    let final = [ ];
     for(let  word of  nArr){
        let nsring = word.charAt(0).toUpperCase()+ word.slice(1);
       final.push(nsring);
     }
   return final.join(' ') // how to convert array into string..
 };