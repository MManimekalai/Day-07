fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(countries => {
    const asianCountries = countries.filter(country => country.region === "Asia");
    console.log(asianCountries);
    const smallPopulationCountries = countries.filter(country => country.population < 200000);
    console.log(smallPopulationCountries);
    countries.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.svg}`);
    });
    const totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
    console.log(`Total Population: ${totalPopulation}`);

    const countryUsingUSD = countries.find(country => country.currencies?.USD?.name === "United States dollar");
    console.log(`Country using USD: ${countryUsingUSD?.name.common}`);
  })
  .catch(error => console.log(error));