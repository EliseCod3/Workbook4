"use strict";

function parsePartCode(partCode) {
    let coln = partCode.indexOf(":");
    let dash = partCode.indexOf("-");

    let supplierCode = partCode.substring(0, coln);
    let partNum = partCode.substring(coln + 1, dash);
    let partSize = partCode.substring(dash + 1);

    
    let partInformation = {
        supplierCode: supplierCode,
        productNumber: partNum,
        size: partSize,
    };

    return partInformation;
}

let partCode1 = "XYZ:1234-L";
let partCodeFunction = parsePartCode(partCode1);
console.log(partCodeFunction);



