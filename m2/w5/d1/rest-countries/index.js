/*
const getCountryInfo = (countryName) => {
  axios
    .get(`https://restcountries.com/v2/name/${countryName}`)
    .then((response) => {
      console.log("Response from API is: ", response);
      const countryDetail = response.data[0];
      console.log("a single country details: ", countryDetail);
    })
    .catch((err) => console.log(err));
};

document.getElementById("get-country-btn").addEventListener("click", () => {
  const userInput = document.getElementById("country-name-input").value;
  getCountryInfo(userInput);
});
*/

/* with the following DOM manipulation we can get the countries info from the third API*/

const getCountryInfo = (countryName) => {
  axios
    .get(`https://restcountries.com/v2/name/${countryName}`)
    .then((response) => {
      const countryDetail = response.data[0];
      console.log("countryDetail", countryDetail);
      document.getElementById("country-name").innerText = countryDetail.name;
      document.getElementById("country-capital").innerText =
        countryDetail.capital;
      document
        .getElementById("country-flag")
        .setAttribute("src", countryDetail.flag);
    })
    .catch((err) => {
      console.log(err);
      err.response.status === 404
        ? alert(`The country ${countryName} doesn't exist.`)
        : alert("Server error! Sorry.");
    });
};

document.getElementById("get-country-btn").addEventListener("click", () => {
  const userInput = document.getElementById("country-name-input").value;
  getCountryInfo(userInput);
});
