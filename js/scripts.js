function pingPong(inputedNum){
var output=[];
for(i=1;i<=inputedNum;i++){
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
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var inputedNum= $("#number").val();
    var output=pingPong(inputedNum);
    output.forEach(function(element){
    $("#list").append( "<li>"+ element );
  });

  });
});
