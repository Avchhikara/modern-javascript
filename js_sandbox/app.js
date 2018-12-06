async function myfunc() {
  const res = await fetch("https://api.github.com/users");
  const data = await res.json();
  return data;
}

myfunc().then(res => console.log(res));
