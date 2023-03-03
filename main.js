const img = document.getElementById("img");

fetch("https://random.dog/woof.json")
  .then((e) => {
    return e.json();
  })
  .then((data) => {
    console.log(data);
    img.setAttribute("src", data.url);
  });
