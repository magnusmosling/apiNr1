





const url = "https://www.fruityvice.com/api/fruit/all"

const proxy = "https://noroffcors.herokuapp.com/"

const sammen = proxy + url;

const fruitycontainer = document.querySelector(".respons2")



async function fruityfunction() {
    try{
        const respons = await fetch(sammen);
        const responsJSON = await respons.json();
        console.log(responsJSON);

        for (let i = 0; i < responsJSON.length; i++) {

            console.log(responsJSON[i]);
            for (let i = 0; i < nutritionsJSON.length; i++) {
                console.log(nutritionsJSON);


                const nutritionsJSON = await nutritions.json();
                console.log(nutritionsJSON);

                for (let i = 0; i < nutritionsJSON.length; i++) {
                    console.log(nutritionsJSON);
                    
                }
                
            }
        }

        // const nutritionsJSON = await nutritions.json();
        // console.log(nutritionsJSON);


        // for (let i = 0; i < nutritionsJSON.length; i++) {
        //     console.log(nutritionsJSON);
            
        // }







    }catch(error){
        console.log("error");
    
   }

}


fruityfunction();


