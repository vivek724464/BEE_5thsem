const Principal=require("../Principal/principal");
//abhi hr bar ek new object create ho rha hai jo alg alg agr use ho to data inconsistent bn jaega
// function suspend(studentName){
//     let principal=new Principal("Nitesh");
//     let principal2=new Principal("Shubham");
//     principal.suspendStudent(studentName);
//     console.log(principal==principal2);  // false
// }
// function notify(){
//     let principal=new Principal("Veer");
//     principal.notify("school bnd rhega ab nacho");
// }
// suspend("vivek");

function suspend(studentName){
    let principal=Principal.getPrinciple();
    let principal2=Principal.getPrinciple();
    principal.suspendStudent(studentName);
    console.log(principal==principal2);
}
suspend("vivek");




