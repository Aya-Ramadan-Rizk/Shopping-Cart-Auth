let links = document.getElementById("links");
let user_data = document.getElementById("user_info");
let user = document.getElementById("user");

if (localStorage.getItem("username")) {
  links.remove();
  user_data.style.display = "flex";
  user.innerHTML = localStorage.getItem("username");
  user.style.textTransform = "capitalize";
}

// -----------------------------
let logOut = (document.getElementById("logOut").onclick = () => {
  localStorage.clear();
  window.location = "register.html";
});