/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function convertWeight(kg) {
    const pounds = kg * 2.2046;
    const grams = kg / 0.0010000;
    const ounces = kg * 35.274;
    
    return {
      pounds: pounds,
      grams: grams,
      ounces: ounces
    };
  }
  
  const form = document.querySelector('form');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const input = document.getElementById('search');
    
    const weightKg = input.value;
    
    const conversions = convertWeight(weightKg);
    
    const output = document.getElementById('output');
    
    output.innerHTML = `
      <p>Weight in pounds: ${conversions.pounds}</p>
      <p>Weight in grams: ${conversions.grams}</p>
      <p>Weight in ounces: ${conversions.ounces}</p>
    `;
  });