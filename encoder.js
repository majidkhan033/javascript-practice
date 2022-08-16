// import readlineSync from "readline-sync";

// function base64Encoding(){
    
//     //step - 1 accept string input\
//     let inputString = readlineSync.question("Enter the string you want to Encode : ")

//     //step - 2 split characters
//     let splitString = inputString.split("");
//     console.log("The string is : ", splitString)

//     //step - 3 ASCII decimals
//     let ASCIIcodes = splitString.map((char) => char.charCodeAt([0]));
//     // let ASCIIcodes = splitString.map(function(char){
//     //     return char.charCodeAt([0])
//     // }
//     console.log("The ASCII array is : ", ASCIIcodes)

//     //step - 4 Binary conversion
//     let binaryCodes = ASCIIcodes.map((num)=>num.toString(2));
//     console.log("Binary codes : ", binaryCodes);

//     // check whether all elements are of 8bit
//     let binaryCode8Bit = binaryCodes.map((bin)=>{
//         while(bin.length<8){
//             bin = "0" + bin;
//         }
//         return bin;
//     })
//     console.log("8bit binary : ", binaryCode8Bit)

//     // join the binary values
//     let oneBinary = binaryCode8Bit.join("").split("");
//     console.log(oneBinary);

//     //splitting into 6 bits
//     let binaryCode6Bit = [];
//     while(oneBinary.length!=0){
//         binaryCode6Bit.push(oneBinary.splice(0,6).join());
//     }
//     console.log("Binaries in 6 bits are : ", binaryCode6Bit)

//     //padding and adding
//     let lastElement = binaryCode6Bit[binaryCode6Bit.length-1];
//     if(lastElement.length!=6){
//         var counter = 0;
//         while (lastElement.length<6){
//             lastElement = lastElement + "0";
//             counter++;
//         }
//         binaryCode6Bit[binaryCode6Bit.length-1] = lastElement;
//     }
//     console.log("Binaries in 6 bits are : ", binaryCode6Bit)

//     let bintoDecimal = binaryCode6Bit.map((str)=>parseInt(str,2));
//     console.log("Bin to 64 Decimals: ", bintoDecimal)

//     let base64 = "ABCDEFGHIKJLMNOPQRSTUVWXYZabcdefghijklmnopqratuvwxwz0123456789+";

//     let base64Final = bintoDecimal.map((dec)=>base64[dec]);
//     console.log("Base 64 string : ", base64Final);
//     if(counter == 2 ){
//         base64Final.push("=");
//     }
//     else if (counter == 4){
//         base64Final.push("==")
//     }
//     let finalBase64String = base64Final.join("");
//     console.log("Your base 64 output is : ", finalBase64String)

// }
// base64Encoding()


import readlineSync from "readline-sync";
function Base64Encoding(){
    // Step-1=> Accept string input
    let inputString=readlineSync.question("Enter the string you want to encode :")
    // Step-2=> Split Character
    let splitString=inputString.split("");
    // console.log("The String is :",splitString);
    // ASCII Decimals
    let ASCIIcodes=splitString.map((char)=>char.charCodeAt());
    // console.log("The ASCII array is ",ASCIIcodes);
    // Converting Decimal ASCII to Binary
    let Binarycodes=ASCIIcodes.map((number)=>number.toString(2));
    // console.log("The Binarycodes : ",Binarycodes);
    // Convert the binary to 8-bit
    let Binarycode8bit=Binarycodes.map((bin)=>{
        while (bin.length<8){
            bin="0"+bin;
        }
        return bin;
    })
    // console.log("Binary in 8-bit :",Binarycode8bit)
    let OneBinary=Binarycode8bit.join("").split("");
    // console.log(OneBinary);
    let Binarycode6bit=[];
    while (OneBinary.length!=0){
        Binarycode6bit.push(OneBinary.splice(0,6).join(""));
    }
    console.log("Binary in 6-bits :",Binarycode6bit)
    // Divide in 6-bits
    // Padding and add =
    let lastElement=Binarycode6bit[Binarycode6bit.length-1];
    if (lastElement.length!=6){
        var counter=0;
        while (lastElement.length<6){
            lastElement=lastElement+"0";
            counter++;
        }
        Binarycode6bit[Binarycode6bit.length-1]=lastElement;
    }
    console.log(Binarycode6bit)
    let bintoDecimal=Binarycode6bit.map((str)=>parseInt(str,2));
    console.log("The conversion is ",bintoDecimal);
    let Base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    let Base64final=bintoDecimal.map((dec)=>Base64[dec]);
    console.log("Base 64 String : ",Base64final);
    if (counter==2){
        Base64final.push("=");
    }else{
        Base64final.push("==");
    }
    let finalBase64String=Base64final.join("");
    console.log("your Base 64 Output is : ",finalBase64String)
}
Base64Encoding()
