document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    if (validate()) {
      const card = document.getElementsByClassName("card")[0];
      card.innerHTML = "";
      card.classList.add("success");

      const successIcon = document.createElement("img");
      successIcon.src = "assets/images/icon-success.svg";
      successIcon.classList.add("successIcon");

      const newTitle = document.createElement("h1");
      newTitle.innerHTML = "Thanks for<br /> subscribing!";
      newTitle.classList.add("successCardTitle");

      const paragraph = document.createElement("p");
      paragraph.innerHTML =
        "A confirmation email has been sent to <strong>ash@loremcompany.com</strong>. Please open it and click the button inside to confirm your subscription.";
      paragraph.classList.add("paragraph");

      const newButton = document.createElement("button");
      newButton.type = "submit";
      newButton.textContent = "Dismiss Message";
      newButton.classList.add("newButton");

      card.appendChild(successIcon);
      card.appendChild(newTitle);
      card.appendChild(paragraph);
      card.appendChild(newButton);
    }
  });
  function validate() {
    let validator = false;
    const emailInput = document.getElementById("email");
    const emailSpan = document.getElementById("email-span");
    if (!emailInput.value) {
      emailSpan.innerHTML = "Email Required!";
      validator = false;
    } else {
      validator = true;
    }

    setTimeout(() => {
      emailSpan.innerHTML = "";
    }, 3000);
  }
});
