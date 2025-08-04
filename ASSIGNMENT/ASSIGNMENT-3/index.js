const form =document.querySelector(".todoForm");
const list=document.querySelector(".list");
const addBtn=document.querySelector(".addTodo")
function addTodo(){
    const title=form.title.value;
    const description=form.description.value;
    let li=document.createElement('li');
    li.innerHTML=
    `<li>
  <div class="todo-content">
    <h2 class="todo-title"> Title: ${title}</h2>
    <p class="todo-description">Description: ${description}</p>
  </div>
  <button class="delete-btn">Delete</button>
    </li>`
    list.appendChild(li);

 const deleteTodo=li.querySelector(".delete-btn");
 deleteTodo.addEventListener('click', ()=>{
    li.remove();
 })
 form.reset();
}
addBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    addTodo();
})