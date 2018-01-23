var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var placeInLine = katzDeliLine.indexOf(name);
  return "Welcome, " + name +". You are number " + (placeInLine+1) + " in line.";
}

function nowServing(){
  if(katzDeli.length < 1){
    return "There is nobody waiting to be served!";
  }
  return katzDeli.shift();
}

function currentLine(katzDeli){
  var message = "The line is currently: "
  if(katzDeli.length < 1){
    return "The line is currently empty.";
  }
  for(var i = 0; i < katzDeli.length; i++){
    message += i+1 +"." +katzDeli[i];
  }
  return message;
}
