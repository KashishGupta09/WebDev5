let a = document.getElementById('insert');

const url = "https://api.covid19api.com/summary";

const getData = () => {
    fetch(url).then((response) => response.json())
    .then((data) =>{
        console.log(data);
        console.log(data.Countries[102].Country); 
        var cName = "Luxembourg";

        for(let i=0; i<197; i++){
            if(data.Countries[i].Country == cName)
                // console.log(data.Countries[i]);

                a.innerHTML = `Country Code :${data.Countries[i].CountryCode}`;
        }
        // console.log(data.Country[cName]);

    })

}

getData();