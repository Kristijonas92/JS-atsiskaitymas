/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const createBrandCard = car => {
    return `
      <div class="brand-card">
        <h3>${car.brand}</h3>
        <ul>
          ${car.models.map(model => `<li>${model}</li>`).join('')}
        </ul>
      </div>
    `;
  }
  
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(cars => {
      const brandCards = cars.map(createBrandCard);
      document.querySelector('main .wrapper .container #output').innerHTML = brandCards.join('');
    });
  