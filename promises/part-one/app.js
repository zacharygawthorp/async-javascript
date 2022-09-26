let favNumb = 23;
let baseURL = "http://numbersapi.com";

//1.
axios.get(`${baseURL}/${favNumb}/?json`).then((res) => {
  console.log(res.data.text);
});

//2.
let numbRange = [1, 10, 7];
axios.get(`${baseURL}/${numbRange}/?json`).then((res) => {
  console.log(res.data);
});

//3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumb}/?json`);
  })
).then((facts) => {
  facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
});
