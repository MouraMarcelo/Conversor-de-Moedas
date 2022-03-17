document.addEventListener('DOMContentLoaded', () => {
  fetch('https://api.exchangerate.host/latest?base=BRL')
  .then(response => response.json())
  .then(data => {
    const rate = data.rates
    
    document.querySelectorAll('select, input').forEach(element => {
      element.onchange = () => {
        const input = document.querySelector('#currency-in').value;
        const output = document.querySelector('#currency-out').value;
        const amount = document.querySelector('#value-in').value;

        const result = rate[output] / rate[input] * amount

        document.querySelector('#value-out').innerHTML = `${result.toFixed(2)} ${output}`;
      };
    });
  });
});