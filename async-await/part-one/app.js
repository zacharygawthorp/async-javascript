let favNumb = 23;
let baseURL = "http://numbersapi.com";

//1.
async function partOne() {
  let data = await $.getJSON(`${baseURL}/${favNumb}?json`);
  console.log(data);
}
partOne();

//2.
const favNumbs = [2, 4, 6, 8];
async function partTwo() {
  let data = await $.getJSON(`${baseURL}/${favNumbs}?json`);
  console.log(data);
}
partTwo();

//3.
async function partThree() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumb}?json`))
  );
  facts.forEach((data) => {
    $("body").append(`<p>${data.text}</p>`);
  });
}
partThree();
