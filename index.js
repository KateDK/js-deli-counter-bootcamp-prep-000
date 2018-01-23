var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var placeInLine = katzDeliLine.indexOf(name);
  return "Welcome, " + name +". You are number " + (placeInLine+1) + " in line.";
}

function nowServing(){
  if(array.length < 1){
    return "There is nobody waiting to be served!";
  }
  return katzDeliLine.shift();
}
