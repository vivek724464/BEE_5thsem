const readline = require('readline');
const fs=require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

// async function inputTodo(){
//     const Title=await askQuestion("ENter Title: ");
//     const Description =await askQuestion("Enter Description: ");
//     let existTodo=[];
//     fs.readFile("./Todo.txt", "utf-8", function(err, data){
//         if(err) return console.log(err);
//         existTodo=JSON.parse(data);
//     })
//     const Todo={
//         Title,
//         Description
//     };
//     existTodo.push(Todo);
//     fs.writeFile("./Todo.txt", JSON.stringify(existTodo), function(err){
//         if(err) return console.log(err);
//         console.log("Todo added");
//     })
//     rl.close();
// }

// let existTodo=[];
// async function addTodo() {
//     const Title=await askQuestion("ENter Title: ");
//     const Description =await askQuestion("Enter Description: ");
//      fs.readFile("./Todo.txt", "utf-8", function(err, data){
//             if(err) return console.log(err);
//             existTodo=JSON.parse(data);

//             const todo={
//                 Title,
//                 Description
//             }
//             existTodo.push(todo);
//             fs.writeFile("./Todo.txt", JSON.stringify(existTodo), function(err){
//         if(err) return console.log(err);
//         console.log("Todo added");
//         rl.close();
//         })
//     })
// }

//  async function deleteTODO(){
//     const title= await askQuestion("Enter title: ");
//      fs.readFile("./Todo.txt", "utf-8", function(err, data){           
//             if(err) return console.log(err);
//             existTodo=JSON.parse(data);
//             existTodo=existTodo.filter((todo)=>{
//             return todo.Title !== title
//         })
//           fs.writeFile("./Todo.txt", JSON.stringify(existTodo), function(err){
//             if(err) return console.log(err);
//             console.log("Todo Deleted");
//         })
//         rl.close();
//         })
// }

// async function showTodo() {
//     fs.readFile("./Todo.txt", "utf-8", function(err, data){
//             if(err) return console.log(err);
//             existTodo=JSON.parse(data);
//             console.log(existTodo);
//         })
//         rl.close();
// }



let existTodo=[];
function readExistingTodo(){
    return new Promise((resolve, reject)=>{
        fs.readFile("./Todo.txt", "utf-8", function(err, data){
            if(err) return reject(err);
            existTodo=JSON.parse(data);
             resolve();
        })
    })
    
}

function addTodo(){
    return new Promise(async (resolve, reject)=>{
         const Title=await askQuestion("ENter Title: ");
         const Description =await askQuestion("Enter Description: ");
     const todo={
        Title,
        Description
    }
    existTodo.push(todo);
    fs.writeFile("./Todo.txt", JSON.stringify(existTodo), function(err){
        if(err) return reject(err);
        console.log("Todo added");
        rl.close();
        resolve();
    })
    })
}

function deleteTodo(){
    return new Promise(async (resolve, reject)=>{
        const title= await askQuestion("Enter title: ");
        existTodo=existTodo.filter((todo)=>{
            return todo.Title !== title
        })
        fs.writeFile("./Todo.txt", JSON.stringify(existTodo), function(err){
            if(err) return reject(err);
            console.log("Todo Deleted");
        })
        rl.close();
        resolve();
    })
}

function showTodo(){
    return new Promise((resolve, reject)=>{
        fs.readFile("./Todo.txt", "utf-8", function(err, data){
            if(err) return reject(err);
            existTodo=JSON.parse(data);
            console.log(existTodo);
             resolve();
        })
    })  
}

async function inputTodo(){
    try{
    await readExistingTodo();
    await addTodo();
    }catch(error){
        console.log(error);
        rl.close();
    }
    
}
// inputTodo();

async function deleteTODO() {
    try{
        await readExistingTodo();
        await deleteTodo();
    }catch(error){
        console.log(error);
        rl.close();
    }
}
// deleteTODO();
async function show(){
    try{
        await showTodo();
    } catch(error){
        console.log(error);
    }
    
}
show();
