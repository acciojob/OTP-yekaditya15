const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;
    if (value) {
      input.classList.remove("focused");
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
        inputs[index + 1].classList.add("focused");
      }
    }
  });

  input.addEventListener("focus", () => {
    inputs.forEach((inp) => inp.classList.remove("focused"));
    input.classList.add("focused");
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && index > 0) {
      inputs[index - 1].focus();
      inputs[index - 1].classList.add("focused");
    }
  });
});
