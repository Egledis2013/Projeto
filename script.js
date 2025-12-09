document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleWelcome");
    const welcomeBox = document.getElementById("welcome");
  
    toggleBtn.addEventListener("click", () => {
      if (welcomeBox.style.display === "none") {
        welcomeBox.style.display = "block";
        toggleBtn.textContent = "Ocultar boas-vindas";
      } else {
        welcomeBox.style.display = "none";
        toggleBtn.textContent = "Mostrar boas-vindas";
      }
    });
  });





