var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var placeInLine = (katzDeliLine[name]+1);
  return `Welcome, $(name). You are number $(placeInLine) in line. `;
}
