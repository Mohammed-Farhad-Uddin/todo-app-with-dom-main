/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Mohammed Farhad Uddin ( Learn with Farhad )
 * Date: 9/17/2021
 *
 */

//select element and assign them variables
const newTask=document.querySelector("#new-task");
const form=document.querySelector("form");
const todoUL=document.querySelector("#items");
const completeUL=document.querySelector(".complete-list ul");

//function
let createElement=function(task){
    const listItem=document.createElement("li");
    const checkBox=document.createElement("input");
    const label=document.createElement("label");

    label.innerHTML=task;
    checkBox.type="checkbox";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask=function(event){
    event.preventDefault();
    let listItem=createElement(newTask.value);
    todoUL.appendChild(listItem);
    newTask.value="";
    bindIncompleteItem(listItem,completeTask)
}

let completeTask=function(){
    let listItem=this.parentNode;
    let deleteBtn=document.createElement("button");
    deleteBtn.innerHTML="Delete";
    deleteBtn.className="delete"
    listItem.appendChild(deleteBtn);

    let checkBox=listItem.querySelector("input[type='checkbox']");
    checkBox.remove();
    completeUL.appendChild(listItem);

    bindCompleteItem(listItem,deleteTask);
}

let deleteTask=function(){
    let listItem=this.parentNode;
    let ul=listItem.parentNode;
    ul.removeChild(listItem);

}

let bindIncompleteItem=function(taskItem,checkboxClick){
 let checkBox=taskItem.querySelector("input[type='checkbox']");
 checkBox.onchange=checkboxClick;
}

let bindCompleteItem=function(taskItem,deleteButtonClick){
    let deleteButton=taskItem.querySelector(".delete");
    deleteButton.onclick=deleteButtonClick;
}

for(i=0;i<todoUL.children.length;i++){
    bindIncompleteItem(todoUL.children[i],completeTask)
}

for(i=0;i<completeUL.children.length;i++){
    bindCompleteItem(completeUL.children[i],deleteTask)
}

form.addEventListener("submit",addTask);










