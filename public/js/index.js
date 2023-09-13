const show = document.getElementById("show");
const detail = document.getElementById("detail");
let userData = [];

const loadData = async () => {
  try {
    const url = await fetch("https://jsonplaceholder.typicode.com/users");
    userData = await url.json();
    loadUserData(userData);
  } catch (err) {}
};

const loadUserData = (data) => {
  const output = data
    .map((el) => {
      return `
        <div class="bg-green-800 p-3">
           <p>Name : ${el.name}</p>
           <p>Username : ${el.username}</p>
           <p>Email' : ${el.email}</p>
           <button onclick="showDetail(${el.id})" class="bg-slate-950 text-white p-2 rounded-md">detail</button> 
           
           
        </div>
    `;
    })
    .join("");
  show.innerHTML = output;
};

function showDetail(id) {
  fetch("https://jsonplaceholder.typicode.com/users/" + id)
    .then((res) => res.json())
    .then((data) => {
      detail.innerHTML =''
      detail.insertAdjacentHTML(
        "beforeend",

        `
      <div class="bg-green-800 p-3 w-80  block mx-auto">
        <p>Name : ${data.name}</p>
        <p>Username : ${data.username}</p>
        <p>Email' : ${data.email}</p>
        <p>addres' : ${data.address.city}</p>
        <p>Phone' : ${data.phone}</p>
      </div>
      `
      );
    });
}
loadData();

