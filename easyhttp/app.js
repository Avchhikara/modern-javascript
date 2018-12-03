const http = new easyHTTP();

// http.get("https://jsonplaceholder.typicode.com/posts", (err, res) => {
//   console.log(res);
// });

const data = {
  title: "Avnish",
  body: "this is the body"
};
// http.post("https://jsonplaceholder.typicode.com/posts", data, (err, res) => {
//   console.log(res);
// });

//sending a put request
http.put("https://jsonplaceholder.typicode.com/posts/1", data, (err, res) => {
  console.log(res);
});
