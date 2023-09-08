let equalPressed = 0;
let buttonInput = document.querySelectorAll(".input-button");

let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
let deleteButton = document.getElementById("delete");
let clearButton = document.getElementById("clear");

window.onload = ()=>{
  input.value = "";
}

buttonInput.forEach((buttonClass)=>{
  buttonClass.addEventListener("click",()=>{
    if(equalPressed == 1){
      input.value = "";
      equalPressed = 0;
    }
    input.value += buttonClass.value;
  });
});

equal.addEventListener("click",()=>{
  equalPressed = 1;
  let inpValue = input.value;
  try{
    let solution = eval(inpValue);
    if(Number.isInteger(solution)){
      input.value = solution;
    }else{
      input.value = solution.toFixed(2);
    }
    }
    catch(err){
      alert("Invalid Input");
  }
});

deleteButton.addEventListener("click", () => {
  let currentValue = input.value;
  input.value = currentValue.slice(0, -1); 
});

clearButton.addEventListener("click", () => {
  input.value = "";
  equalPressed = 0;
});