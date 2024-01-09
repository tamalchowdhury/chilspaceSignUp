const toggleShowButton = document.querySelector(".form__toggle_password")

toggleShowButton.addEventListener("click", togglePassword)

function togglePassword(event) {

  const passwordField = document.querySelector("#new-password")
  const currentType = passwordField.getAttribute("type")
  const showText = document.getElementById("showText")
  const eyeIcon = document.querySelector(".fas")

  if(currentType === "password") {
    passwordField.setAttribute("type", "text")
    showText.textContent = "HIDE"
    eyeIcon.classList.remove("fa-eye-slash")
    eyeIcon.classList.add("fa-eye")

  }

  if(currentType === "text") {
    passwordField.setAttribute("type", "password")
    showText.textContent = "SHOW"
    eyeIcon.classList.remove("fa-eye")
    eyeIcon.classList.add("fa-eye-slash")

  }



}