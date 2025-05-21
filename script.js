let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide(index) {
  if (index >= totalSlides) slideIndex = 0;
  else if (index < 0) slideIndex = totalSlides - 1;
  else slideIndex = index;

  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}


function moveSlide(step) {
  showSlide(slideIndex + step);
}


setInterval(() => {
  showSlide(slideIndex + 1);
}, 3000); 


  const emailInput = document.getElementById("emailInput");
  const messageSection = document.getElementById("messageSection");

  emailInput.addEventListener("input", () => {
    if (emailInput.value.trim() !== "") {
      messageSection.style.display = "block";
    } else {
      messageSection.style.display = "none";
    }
  });

  function storeMessage() {
    const email = document.getElementById("emailInput").value;
    const message = document.getElementById("messageInput").value;

    if (email && message) {
      const storedMessages = JSON.parse(localStorage.getItem("queries")) || [];
      storedMessages.push({ email, message });
      localStorage.setItem("queries", JSON.stringify(storedMessages));
      alert("Your query has been saved successfully!");
      emailInput.value = "";
      document.getElementById("messageInput").value = "";
      messageSection.style.display = "none";
    } else {
      alert("Please fill in both fields.");
    }
  }

