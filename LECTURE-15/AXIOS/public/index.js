// function to get comment data
function getComment(URL){
    // how to send get req using axios
    axios.get(URL).then((data)=>{
        console.log(data);
    }).catch(err=>console.log(err));
    
}
// converted to async await
// async function getComment2(URL) {
//     try{
//     const resp=await axios.get(URL);
//     console.log(resp);

//     }catch(err){
//         console.log(err);
//     }
    
// }

getComment("https://jsonplaceholder.typicode.com/comments");


// function to add new blog
async function addBLog(URL, title, description){
    try{
    let newBlog={
        title:title,
        description:description
    }
    let response=await axios.post(URL, newBlog);
    console.log(response.data);       // axios always sends data in response using a key called data.
}catch(error){
console.log(error)
}
} 
addBLog('http://localhost:4444/blog', "first blog", "fist blog description")

