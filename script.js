const toggleShowButton = document.querySelector(".form__toggle_password")

toggleShowButton.addEventListener("click", togglePassword)

function togglePassword(event) {



  const passwordField = document.querySelector("#new-password")
  const currentType = passwordField.getAttribute("type")
  const showText = document.getElementById("showText")

  if(currentType === "password") {
    passwordField.setAttribute("type", "text")
    showText.textContent = "HIDE"

  }

  if(currentType === "text") {
    passwordField.setAttribute("type", "password")
    showText.textContent = "SHOW"

  }



}