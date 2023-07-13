function loadMeals(){
    let searchResult = document.getElementById('btn-search').value
    if(searchResult != ''){
        // let searchResult = 'fish'
        // let apiLink = 'https://www.themealdb.com/api/json/v1/1/search.php?s=fish'
        let apiLink = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
        apiLink = apiLink+searchResult
        fetch(apiLink)
        .then(res => res.json())
        .then(data => doStuff(data));
    }


}

function doStuff(data){

    for (i in data.meals){
    //     console.log(data.meals[i].strMeal);

    //     document.getElementById('wrapper').innerHTML += `
    //         <img src="${data.meals[i].strMealThumb}" alt="No image available">
    //         <h1 class="name">${data.meals[i].strMeal}</h1>
    //         <div class="description">${data.meals[i].strArea}, ${data.meals[i].strCategory}</div>
    //     `
    // }



        document.getElementById('wrapper').innerHTML += `
            <div class="food-item">
                <img src="${data.meals[i].strMealThumb}" alt="No image available" class="demo-picture w-full h-[300px] bg-black object-cover"></img>
                <div class="name pl-3 pt-2 text-2xl">${data.meals[i].strMeal}</div>
                <div class="description pl-3 pb-3">${data.meals[i].strArea}, ${data.meals[i].strCategory}</div>
            </div>
        `
    }

    console.log(data.meals[0]);
}

// loadMeals();