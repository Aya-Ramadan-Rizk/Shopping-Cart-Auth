let username = document.getElementById("username");
let password = document.getElementById("password");
let login_btn = document.getElementById("sign_up");

let get_username = localStorage.getItem("username");
let get_password = localStorage.getItem("password");

login_btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (username.value == "" || password.value == "") {
    alert("please fill data");
  } else {
    if (
      get_username.trim() === username.value.trim() &&
      get_password === password.value
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1 * 1000);
    } else {
      alert("UserName or Password is wrong");
    }
  }
});
// ---------------------------- 3
let show = document.getElementById("show");
// show.onclick = () => {
//     if(show.checked){
//         password.type = "text"
//     }else{
//         password.type = "password"
//     }
// }
show.addEventListener("click", () => {
  password.type = show.checked ? "text" : "password";
});
