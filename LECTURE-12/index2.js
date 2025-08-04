// Adding a new element using js in a dom tree
// step 1: create a new element using createELement function
// step 2: insert required data in that element either by using innerHTML or innerText
// step 3: insert new element in parent container using appendChild or append.


let todos=[
    {
        id:1,
        title:"walk"
    },
    {
        id:2,
        title:"slepp"
    },
    {
        id:3,
        title:"run"
    }
]

// let todo={
//     id,
//     title
// }
let todocont=document.querySelector(".todocont");
function addTodo(todo){
    let li=document.createElement("li");     // creatng the element
    li.innerHTML=`<div>
                <input type="checkbox">
                <h1>${todo.title}</h1>
                <div>
                    <button>❌</button>
                    <button>✔️</button>
                </div>
            </div>`
            todocont.appendChild(li)    // inserting in parent container
}

function showAllTodo(todos){
    todos.forEach(todo => {
        addTodo(todo);
    });
}

showAllTodo(todos);

