const generate=document.querySelector(".btn");
const btngen=document.querySelector(".btngen");
const div=document.querySelector(".mydiv");
 let color=[ "#7E3FF2",
  "#23A48B",
  "#D1495B",
  "#FFC857",
  "#30C5FF",
  "#7BDFF2",
  "#F25F5C",
  "#70C1B3",
  "#247BA0",
  "#50514F"]
let intervalId;
  function randomColor(){
  const randomIndex=Math.floor(Math.random() * 10);
     return randomC = color[randomIndex];
    }
generate.addEventListener("click", ()=>{
    intervalId=setInterval(()=>{
        let color=randomColor();
        div.style.backgroundColor=color;
    }, 100);
});

btngen.addEventListener("click", ()=>{
    if(intervalId){
        clearInterval(intervalId);
    }
})
