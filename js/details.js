console.dir.document;


const params = new URLparams(queryString);









const url = "https://www.fruityvice.com/api/fruit/all"

const proxy = "https://noroffcors.herokuapp.com/"

const sammen = proxy + url;

const fruitycontainer = document.querySelector(".respons2")



async function fruityfunction() {
    try{
        const respons = await fetch(sammen);
        const responsJSON = await respons.json();
        console.log(responsJSON);

            console.log(responsJSON[i]);


            fruitycontainer.innerHTML =`
            
            <div class="respons2">
            <h1> ${}

            </h1>    
             </div>
             `

    }catch(error){
        console.log("error");
    
   }

}


fruityfunction();


