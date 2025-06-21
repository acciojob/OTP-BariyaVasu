const inputs = document.querySelectorAll(".code");

// Auto-focus first input on load
window.addEventListener("load", () => inputs[0].focus());

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    // Allow only digits
    if (!/^\d$/.test(value)) {
      e.target.value = '';
      return;
    }

    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "") {
        if (index > 0) {
          inputs[index - 1].value = '';
          inputs[index - 1].focus();
        }
      } else {
        input.value = '';
      }
    }
  });
});
