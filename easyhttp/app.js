const http = new easyHTTP();

http.get("https://jsonplaceholder.typicode.com/posts", (err, res) => {
  console.log(res);
});