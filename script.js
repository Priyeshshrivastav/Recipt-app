
const mealsContainer=document.querySelector("#meals")
const input=document.querySelector("#search-input")

const recipe=()=>{
    let textInput=input.value.trim()

    //api logic
     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${textInput}`)

    .then(response=>response.json())
    .then(data=>{
        const meals=data.meals;
        console.log(meals);


        //clear old results
        mealsContainer.innerHTML=" "

        if(!meals){
            mealsContainer.innerHTML="<p>No meals found!</p>"
            return ;
        }

        meals.forEach(meal => {
            const mealDiv=document.createElement("div")
            mealDiv.classList.add("meal")
            mealDiv.innerHTML = `
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
          <h3>${meal.strMeal}</h3>
        `;

        mealsContainer.appendChild(mealDiv);
            
        });
      
    })
    .catch(err=>{
        console.log("errors",err);
        mealsContainer.innerHTML="<p>Error fetching meals</p>"
    })
}