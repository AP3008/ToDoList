const list = document.getElementById("list");
let arr = []; 


function addTask(){
  document.getElementById("warning").innerHTML = "Please enter task"
  document.getElementById("error").style.visibility = "hidden"
  let task = document.getElementById("input-task").value;
  if(task === ""){
    document.getElementById("error").style.visibility = "visible"
    return; 
  }
  for(let i = 0; i<arr.length; i++){
    if(task === arr[i]){
      document.getElementById("warning").innerHTML = "You already entered that"
      document.getElementById("error").style.visibility = "visible"
      return 
    }
  }
  let taskElement = `
      <div id = "body-${task}" class = "task">
        <div>
          <input type="checkbox" onclick="checkIt(this)" id=${task} /> 
          <label id=label-${task}>${task}</label>
        </div>
        <i id="-${task}" onclick="deleteNode(this)" class="fa fa-ban" aria-hidden="true"></i>
      </div>`

  arr.push(task);
  console.log(arr)
  list.innerHTML+=taskElement; 

  //document.getElementById(task).checked === true/false
}

function checkIt(node){
  if(node.checked === true){
    document.getElementById(`label-${node.id}`).innerHTML = node.id.strike(); 
    document.getElementById(`label-${node.id}`).style.color="gray"
  }
  else{
    document.getElementById(`label-${node.id}`).innerHTML = node.id
    document.getElementById(`label-${node.id}`).style.color="black"
  }
}

function deleteNode(node){
  document.getElementById(`body${node.id}`).innerHTML=""; 
  //document.getElementById(`body${node.id}`).remove(); 
  
  for(let i = 0; i<arr.length;i++){
    if(node.id.substring(1) === arr[i]){
      arr[i]=""; 
    }
    else{
      continue; 
    }
  }
  arr.filter((val)=>{
    document.getElementById(`body${node.id}`).innerHTML=""; 
    return val !== node.id
  })
}

function deleteVisible(){
  document.getELementByClass("fa-ban").style.visibility = "visible";
}

document.addEventListner('onhover', deleteVisible)