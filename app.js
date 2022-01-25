let list =document.getElementById("list");

const addTodo = ()=>{
    let todo_item =document.getElementById("todo-item")

//    create li
    let li =document.createElement("li")
    let liText=document.createTextNode(todo_item.value)
    li.appendChild(liText)
// delbtn 
    let delBtn = document.createElement("button")
    let delText= document.createTextNode("delete")
   delBtn.setAttribute("class","btn btn-danger ml-5 ")
   delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)
// craete edit btn 
    let editBtn = document.createElement("button");
    let editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class","btn btn-success ml-5")
    editBtn.setAttribute("onclick","editItem(this)")


    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todo_item.value = ""
    
    
}
const deleteItem=(e)=>{
    e.parentNode.remove()
}
const deleteAll=()=>{
    list.innerHTML= ""
}

const editItem=(e)=>{
    let val= e.parentNode.firstChild.nodeValue;
   let editValue= prompt("Enter edit value",val)
    console.log(e.parentNode.firstChild)
    e.parentNode.firstChild.nodeValue=editValue
}     