var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var placeInLine = (katzDeliLine[name]);
  return "Welcome, " + name +". You are number " + (placeInLine+1) + " in line.";
}
