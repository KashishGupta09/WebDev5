let btn = document.getElementById('btn');
let input = document.getElementById('input');
let err = document.getElementById('error');
let ans = document.getElementById('details');
let countryCode = document.getElementById('CC');
let newCase = document.getElementById('NC');
let recovered = document.getElementById('RC');
let deaths = document.getElementById('DD');

const url = "https://api.covid19api.com/summary";



let isResponseInProgress = false;

const setIsResponseInProgress = value => {
    isResponseInProgress = value;
}

const getData = () => {
    if(isResponseInProgress)
        return;
    if (!input.value)
        return error();

 getAns();
};

const error = () => {
    err.innerHTML = " Valid Input Pls!!";

    setTimeout(() => {
        err.innerHTML = '';
        input.value= '';
    }, 3000);

};

const getAns = () => {
    let counter = 0;
    setIsResponseInProgress(true);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            for (let i = 0; i < 197; i++, counter++) {
               // console.log("in");
               // console.log(input.value);

               console.log('data.Countries[i].Country: ', data.Countries[i].Country);
                if (data.Countries[i].Country == input.value) {
                    // console.log(input.value);
                    // ans.innerHTML = `Country ID : ${data.Countries[i]}` 
                    console.log(countryCode);
                    countryCode.innerHTML = `Country Code : ${data.Countries[i].CountryCode}`;
                    //console.log(countryCode.innerHTML);
                    newCase.innerHTML = `New Case : ${data.Countries[i].NewConfirmed}`;
                    recovered.innerHTML = `Recovered : ${data.Countries[i].NewRecovered}`;
                    deaths.innerHTML=`Deaths : ${data.Countries[i].NewDeaths}`;  
                    break;
                    
                }     
            }

            if(counter == 197)
              error();
               
        })

        clearData();
};

const clearData = () => {
    setTimeout(() => {
        // ans.innerHTML = '';
        countryCode.innerHTML= '';
        newCase.innerHTML ='';
        recovered.innerHTML = '';
        deaths.innerHTML='';
        input.value = '' ;
       setIsResponseInProgress(false);
    },5000);
};

btn.addEventListener('click', getData);