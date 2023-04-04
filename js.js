const btn = document.querySelector(".btn");
const inputElement = document.querySelector(".inputElement");

btn. addEventListener("click", getData);

function getData() {

    let country = inputElement.value;

    fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, {   
        method: "GET",
        headers: {
            'X-RapidAPI-Key': '31dfdc4bddmshb20f8503594acc3p15bab6jsnc8c2210b9e6d',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        },
    })
     .then ((response) => response.json())
     .then ((json) => {
        let data = json.response[0];
        document.querySelector(".activeCases").innerHTML = data.cases.active;
        document.querySelector(".newCases").innerHTML = data.cases.new;
        document.querySelector(".recoveredCases").innerHTML = data.cases.recovered;
        document.querySelector(".totalCases").innerHTML = data.cases.total;
        document.querySelector(".totalDeath").innerHTML = data.deaths.total;
        document.querySelector(".totatTest").innerHTML = data.tests.total;
     })
}
    