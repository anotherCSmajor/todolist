 document.addEventListener("DOMContentLoaded", function() {
 let addmorebtn = document.getElementById("addmorebtn")

addmorebtn.addEventListener("click", addfun);
function addfun(){
let todolist = document.getElementById("todolist")
 let remove= document.createElement("button")
 remove.textContent="X"
remove.id="removebtn"
let  task = document.createElement("input")
task.type="text";
task.id="task"
/* from above older version  */
  let descbtn = document.createElement("button")
  descbtn.id= "descbtn";
  descbtn.textContent= ">";
  let desctext = document.createElement("textarea")
  desctext.id = "desctext"
  
desctext.cols= 7;
desctext.rows=  3;
desctext.style.visibility= "hidden"
descbtn.addEventListener("click", ()=>{desctext.style.visibility==="hidden"? desctext.style.visibility= "visible":desctext.style.visibility= "hidden";})

  /* from here below older version */
  /* adding local storage and saving button :) */
let save = document.createElement("button");
save.id ="savebtn";
save.textContent="save"
let retrieve = document.createElement("button")
retrieve.id = "retreive";

//on click adding storage option

save.addEventListener("click",()=>{
  localStorage.setItem("task",document.getElementById("task").value)
  localStorage.setItem("description",document.getElementById("desctext").value)
})

//now window on load will give its value on sceen
retrieve.addEventListener("click",()=>{
  document.getElementById("task").value= localStorage.getItem("task")
  document.getElementById("desctext").value=localStorage.getItem("desctext")
})
/* onload done  */
let taskdone= document.createElement("input");
taskdone.type ="checkbox";

let wrapper = document.createElement("div");
 wrapper.id="wrapper"
 taskdone.addEventListener("click",()=> {
          if(taskdone.checked){
            task.classList.add("strikethrough")
          
          }
          else
          {
            task.classList.remove("strikethrough");

          }
           })
wrapper.appendChild(remove)
wrapper.appendChild(taskdone);
wrapper.appendChild(task);
wrapper.appendChild(descbtn);
wrapper.appendChild(retrieve)
wrapper.appendChild(save)
wrapper.appendChild(desctext);
todolist.appendChild(wrapper);
remove.addEventListener("click" ,()=>{
  wrapper.removeChild(task)
  wrapper.removeChild(taskdone)
  wrapper.removeChild(remove)
  wrapper.removeChild(descbtn)
  wrapper.removeChild(desctext)
  wrapper.removeChild(save)
  wrapper.removeChild(retrieve)
 })
}

}



)
