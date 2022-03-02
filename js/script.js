const url = "https://www.fruityvice.com/api/fruit/all"

const proxy = "https://noroffcors.herokuapp.com/"

const sammen = proxy + url;

const fruitycontainer = document.querySelector(".respons")


async function fruityfunction() {
    try{
        const respons =  await fetch(sammen);
        const responsJSON = await respons.json();
        console.log(responsJSON);

        for (let i = 0; i < responsJSON.length; i++) {

            console.log(responsJSON[i]);


            fruitycontainer.innerHTML += `<div class="fruti-card">

            <a href="details.html?name=${responsJSON[i].name} ">

            <p> ${responsJSON[i].name} </p></a>
            <p> ${responsJSON[i].id} </p> 
            <p> ${responsJSON[i].family} </p> 


            
            </div>`



         
        }

    }catch(error){
        console.log("an error hapond");
    
   }

}


fruityfunction();
