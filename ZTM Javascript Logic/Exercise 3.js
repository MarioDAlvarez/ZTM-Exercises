// Write a function that converts HEX to RGB. Then Make that 
// function auto-dect the formats so that if you enter HEX color 
// format it returns RGB and if you enter RGB color format it returns HEX.

//control how the user enters color format, instructions?, string?
//auto detect format, conditional statement?
//serperate functions for each detected format
//convert RGB to HEX, console.log result
//convert HEX to RGB, console.log result

function colorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }
  
function convertRGBtoHex(rgbArray) {
    var red = colorToHex(Number(rgbArray[0]));
    var green = colorToHex(Number(rgbArray[1]));
    var blue = colorToHex(Number(rgbArray[2]));
    console.log(`#${red}${green}${blue}`);
}


function convertHexToRGB(color) {
    var red = parseInt(color[0]+color[1],16);
    var green = parseInt(color[2]+color[3],16);
    var blue = parseInt(color[4]+color[5],16);
    console.log(`rgb(${red}, ${green}, ${blue})`);
}

function convertColor(color) {
    const regex = /rgb\([0-9]{1,3}\, [0-9]{1,3}\, [0-9]{1,3}\)/g;
    const regex2 = /[0-9]{1,3}/g;

    if (color[0] === '#' && color.length == 7) {
        convertHexToRGB(color.substr(1));
    } else if (regex.test(color)) {
        const rgbArray = color.match(regex2);
        convertRGBtoHex(rgbArray);
    } else {
        console.log(`Incorrect format. Please enter HEX as a string in "#XXXXXX" format and RGB as a string in "rgb(XXX, XXX, XXX)" format`);
    }
}

convertColor("#ffffff");
convertColor("#ff0a01");
convertColor("rgb(255, 255, 255)");
convertColor("rgb(255, 10, 1)");
convertColor("kfjhkjfhg");