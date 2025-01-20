const countrySection = document.querySelector("#country-section");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
       console.log(country);
    const countryCard = document.createElement("a");
    countryCard.href=`country.html?name=${country.name.common}`;
    countryCard.className=
      "shadow-[0_0px_4px_0px_rgba(0,0,0,0.6)] w-[250px] bg-white dark:bg-darkblue rounded-xl overflow-hidden inline-block transition-all duration-300  ease-in-out mt-3 hover:scale-105"
    ;
    
   
    countryCard.innerHTML =`<img src="${country.flags.svg}" class=" max-w-[100%] max-h-[100%] " alt="${country.name.common}" />
              <div class="p-2 pb-4">
                <h2 class="font-bold my-2 text-2xl">${country.name.common}</h2>
                <p class="font-bold">
                  Population: <span class="font-light">${country.population.toLocaleString()}</span>
                </p>
                <p class="font-bold">
                  Region: <span class="font-light">${country.region}</span>
                </p>
                <p class="font-bold">
                  Capital: <span class="font-light"> ${country.capital}</span>
                </p>
              </div>`;
  countrySection.append(countryCard);
    });
  });


 