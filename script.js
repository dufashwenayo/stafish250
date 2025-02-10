// Change navbar on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  
  // Animate service cards on scroll
  const serviceCards = document.querySelectorAll(".service-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );
  
  serviceCards.forEach((card) => observer.observe(card));
  



//   team


function checkInput(input) {
  // Check if the input field is filled
  const checkbox = document.getElementById(input.id + 'Done');
  checkbox.checked = input.value.trim() !== '';
}

function toggleNextField(checkbox, nextFieldId) {
  // Show the next field if the checkbox is checked
  const nextField = document.getElementById(nextFieldId + 'Field');
  if (checkbox.checked) {
      nextField.style.display = 'block';
  } else {
      nextField.style.display = 'none';
      // Optionally clear the next field's value
      document.getElementById(nextFieldId).value = '';
      // Also uncheck the corresponding checkbox
      const nextCheckbox = document.getElementById(nextFieldId + 'Done');
      nextCheckbox.checked = false;
  }
}
