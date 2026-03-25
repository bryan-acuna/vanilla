window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const password2 = document.querySelector("#password2");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const usernameValue = username.value;
    if (!emptyValidator(usernameValue)) {
      showError(username, "User is required");
    }
  });
});

//empty validator
function emptyValidator(value) {
  return value !== "";
}

function 

function showError(field, message) {
  const formControl = field.parentElement;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
}
