    const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value.match(/[^0-9]/)) {
          e.target.value = '';
          return;
        }

        if (value && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          if (input.value === '') {
            if (index > 0) {
              inputs[index - 1].focus();
              inputs[index - 1].value = '';
            }
          } else {
            input.value = '';
          }
          e.preventDefault();
        }
      });
    });

    // Autofocus on the first input when page loads
    window.addEventListener('DOMContentLoaded', () => {
      inputs[0].focus();
    });
