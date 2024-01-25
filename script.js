document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Remove old content
    document.getElementById("card").innerHTML = "";

    // Create and append new content
    var card = document.getElementById("card");
    card.style.padding = "1rem";
    card.style.flexDirection = "column";
    var message = document.createElement("p");
    message.textContent = "Thank you for subscribing!";
    document.getElementById("card").appendChild(message);
    message.style.fontFamily = "Roboto";
    message.style.fontSize = "30px";
    message.style.fontWeight = "700";
    message.style.color = "hsl(234, 29%, 20%);";
    var description = document.createElement("p");
    description.textContent = `"A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription"`;
    card.appendChild(description);
    card.message.description.style.fontweight = "400";
  });
});
