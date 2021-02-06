randomDrink();

let form = document.getElementById("submitForm");
let mealContainer =  document.getElementById("container");
let row = document.querySelector(".row");
// console.log(row)

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let searchItem = document.getElementById("search-term").value;
    searchByName(searchItem)
})
async function randomDrink(){
    const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const respData = await resp.json()
    const drinks = respData.drinks[0]
    // console.log(drinks)
    displayDrink(drinks,true)
}


async function searchByName(searchTerm){
    const resp = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const respData = await resp.json();
    const results = respData.drinks;
    mealContainer.innerHTML = "";
    displayResults(results)


}

function displayResults(drinks){
    // mealContainer.innerHTML = "";
    const row = document.createElement("div");
    row.className = "row"
    mealContainer.appendChild(row)
    // const row = document.querySelector(".row");
    // row.innerHTML = ""
    // mealContainer.appendChild(row)
   
    console.log(drinks)
    drinks.map(drink=>{
        console.log(drink)
        const item = document.createElement("div");
        item.className ="col-sm-2 col-md-4 p-3";
        // item.style.height = '400px'
        item.innerHTML = `

            <div class="card shadow bg-light rounded" style="width:20rem;overflow:hidden;">
                <img src="${drink.strDrinkThumb}" class="img-fluid" height:400px; alt="${drink.strDrink}">
                <div class="card-body">
                    <h5>${drink.strDrink}</h5>
                    
                    <a href="#"  class="btn btn-primary">View Cocktail</a>
                </div>

            </div>
            `;
        row.appendChild(item)
    })
    // row.appendChild(item);
    // mealContainer.appendChild(item)
    


}


function displayDrink(drinkData,random=false){
    // console.log(drinkData)
    // const mealContainer =  document.getElementById("container");
    const recipe = document.createElement("div");
    recipe.className = "recipe"
    recipe.innerHTML = `
        <div class="image">
            <img src="${drinkData.strDrinkThumb}" alt="${drinkData.strDrink}">
        </div>
        <div class="methods">
            <div class="instructions">
                <div class="header border-bottom border-dark pt-3">
                  <h2 class="text-center fw-bolder p-2">${drinkData.strDrink}</h2>
                </div>
               <div class="ingredients pt-4">
                    <h3 class="text-center" >Ingredients</h3>
                    <p>
                        <span >${drinkData.strIngredient1}</span>,
                        <span class="ps-2">${drinkData.strIngredient2}</span>,
                        <span class="ps-2">${drinkData.strIngredient3}</span>,
                        <span class="ps-2">${drinkData.strIngredient4}</span>,
                        <span class="ps-2">${drinkData.strIngredient5}</span>,
                        <span class="ps-2">${drinkData.strIngredient6}</span>,
                        <span class="ps-2">${drinkData.strIngredient7}</span>,
                        <span class="ps-2">${drinkData.strIngredient8}</span>,
                        <span class="ps-2">${drinkData.strIngredient9}</span>,
                        <span class="ps-2">${drinkData.strIngredient10}</span>,
                        <span class="ps-2">${drinkData.strIngredient11}</span>,
                        <span class="ps-2">${drinkData.strIngredient12}</span>,
                        <span class="ps-2">${drinkData.strIngredient13}</span>,
                        <span class="ps-2">${drinkData.strIngredient14}</span>,
                        <span class="ps-2">${drinkData.strIngredient15}</span>,
                    </p>
               </div>
              
                

                <div className="directions">
                    <h3 class="text-center">Instructions</h3>
                    <p>${drinkData.strInstructions}</p>
                </div>
               
            </div>
            
        </div>
    `;

    mealContainer.appendChild(recipe)

}

