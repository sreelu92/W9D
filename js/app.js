
function add(firstno, secondno) {
    var result = firstno + secondno;
    var finalResult = result * 5;
    return finalResult;
}



function out(value) {
    var result1 = value.length;
    // console.log(result1);
    if (result1 > 10) {
        return true;
    }
    else {
        return false;
    }


}


function start(output) {
    console.log(output);
    for (var i = 0; i < output.length; i++) {
        if (output[i].startsWith("ph")) {
            return output[i];
        }
       
    }
    console.log("element not exist");
    

    // for(var i=0;i<output.length;i++) {
    //     if(output[i].substr(0,2)=="ph")
    //     {
    //         return output[i];
    //     }

    // }
}


var addNumbers = add(9, 3);
console.log(addNumbers);

var check = out("sreelekshmi");
console.log(check);

var stringArray = ["tv", "phone", "fan", "fridge", "photo"];
var result2 = start(stringArray);
console.log(result2);
