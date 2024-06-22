
//add event listener for submission (will generate side buttons)
let cityList = JSON.parse(localStorage.getItem("CityNames")) || [];




/*mainButtonEl.addEventListener("click",function(event){

    if(inputBoxEl.value){

        const cityObj = {

            City: inputBoxEl.value,

        }

        let stringifiedCityObj = JSON.stringify(cityObj);
        cityList.push(stringifiedCityObj);

        localStorage.setItem("CityNames", JSON.stringify(cityList));
        location.reload();


    } else{

        event.preventDefault();
        alert("NO");

    }



});*/

//////////////////////////////////////////////////////////////////////////////////////////