
var tasks = [];
async function fetchPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response){
        return response.json()}
    .then(function(data){tasks = data.slice(0,10)})
    .catch(function(error){console.log("error",error)})
    )
    
}
console.log(fetchPosts());