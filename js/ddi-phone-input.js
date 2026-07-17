// DDI Phone Input Mask and formatting
document.addEventListener('DOMContentLoaded', () => {
  const phoneInputs = document.querySelectorAll('.ddi-phone-input, input[id*="phone"], input[id*="telefone"]');
  
  phoneInputs.forEach(input => {
    // Format on input
    input.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, ''); // Remove all non-digits
      
      // Limit to max 11 digits
      if (value.length > 11) {
        value = value.slice(0, 11);
      }
      
      // Format as (XX) XXXXX-XXXX or (XX) XXXX-XXXX
      if (value.length > 10) {
        // 11 digits: (XX) XXXXX-XXXX
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 6) {
        // 7-10 digits: (XX) XXXX-XXXX
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
      } else if (value.length > 2) {
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length > 0) {
        e.target.value = `(${value}`;
      } else {
        e.target.value = '';
      }
    });
  });
});
