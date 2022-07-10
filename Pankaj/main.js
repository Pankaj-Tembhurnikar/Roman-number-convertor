// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let result = document.getElementById("result");
let numRomanPairs = {
    "1": "I",
    "2": "II",
    "3": "III",
    "4": "IV",
    "5": "V",
    "6": "VI",
    "7": "VII",
    "8": "VIII",
    "9": "IX",
    "10": "X",
    "20": "XX",
    "30": "XXX",
    "40": "XL",
    "50": "L",
    "60": "LX",
    "70": "LXX",
    "80": "LXXX",
    "90": "XC",
    "100": "C",
    "200": "CC",
    "300": "CC",
    "400": "CD",
    "500": "D",
    "600": "DC",
    "700": "DCC",
    "800": "DCCC",
    "900": "CM",
    "1000": "M",
    "2000": "MM",
    "3000": "MMM",
}
function convertToRoman() {
    let number = document.getElementById("text").value;
    let duplicateNum = number;
    const thousands = parseInt(duplicateNum/1000) * 1000;
    const hundreds = parseInt((duplicateNum - thousands)/100) * 100;
    const tens = parseInt((duplicateNum - thousands - hundreds)/10) * 10;
    const units = duplicateNum - thousands - hundreds - tens;

    const convertedNumeral = (thousands?numRomanPairs[thousands]:"") + "" +
    (hundreds?numRomanPairs[hundreds]:"") + "" +
    (tens?numRomanPairs[tens]:"") + "" +
    (units?numRomanPairs[units]: "");
    //document.getElementById("result").innerHTML = "Result : " + convertedNumeral || "Empty String";
	document.getElementById("result").value = convertedNumeral || "Empty String";
}

function clearText() {
    document.getElementById("text").value = "";
    document.getElementById("result").innerHTML = "";
}
