function pingPong(inputedNumber){
var output=[];
for(i=1;i<=inputedNumber;i++){
  if(i%15===0){
output.push("ping-pong");
  }
  else if(i%3===0){
    output.push("ping");
  }
  else if(i%5===0){
    output.push("pong");
  }
  else{
    output.push(i);
  }
}
return output;
}

/** user interface**/
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var inputedNumber= $("#number").val();
    var output=pingPong(inputedNumber);
    output.forEach(function(element){
    $("#list").append( "<li>"+ element+"</li>");
  });
 });
});
