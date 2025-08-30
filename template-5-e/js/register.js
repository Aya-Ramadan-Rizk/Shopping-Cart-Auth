let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let register_btn = document.getElementById("sign_up");

register_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    username.value.trim() == "" ||
    email.value.trim() == "" ||
    password.value == ""
  ) {
    Swal.fire({
      title: "Enter the required data",
      text: "That thing is still around?",
      icon: "warning",
    });
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You are logged in",
      showConfirmButton: false,
      timer: 1000,
    });

    setTimeout(() => {
      window.location = "login.html";
    }, 1.1 * 1000);
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
