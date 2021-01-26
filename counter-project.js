let textBox = document.getElementById('textBox');
let counterBtn = document.getElementById('counterBtn');
let coutnerDiv = document.getElementById('coutnerDiv');
function printFxn(){
  if(textBox.value == ""){
    alert("Please Enter the number!");
  }else{
  let i= 1;
  var stopId = setInterval(function(){
    if(i > textBox.value){
      alert("Your Time is Out!");
      clearInterval(stopId);
      return;
    }
  coutnerDiv.innerText = i;
  i++;
},1000);
 }
}
