
document.getElementById('search').addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        document.getElementById('btn-search').click();
    }
})


function loadMeals(){
    document.getElementById('empty-text').innerHTML = 'Loading...'
    let searchResult = document.getElementById('search').value
    if(searchResult != ''){
        // let searchResult = 'fish'
        // let apiLink = 'https://www.themealdb.com/api/json/v1/1/search.php?s=fish'
        let apiLink = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
        apiLink = apiLink+searchResult
        fetch(apiLink)
        .then(res => res.json())
        .then(data => doStuff(data));
    }
    else{
        document.getElementById('empty-text').innerHTML = 'Please enter something'
    }
}

function doStuff(data){

    document.getElementById('empty-text').innerHTML = ''
    document.getElementById('wrapper').innerHTML = ''

    if (Array.isArray(data.meals) && data.meals.length) {
        document.getElementById('comment').innerHTML = `from <span class="underline">themealdb.com</span>`
        for (i in data.meals){
            document.getElementById('wrapper').innerHTML += `
            <div class="food-item border border-color6 bg-color4 hover:shadow-2xl transition hover:-translate-y-1">
            <img src="${data.meals[i].strMealThumb}" alt="No image available" class="demo-picture w-full h-[300px] object-cover"></img>
            <div class="name pl-3 pt-3 text-2xl text-color6">${data.meals[i].strMeal}</div>
            <div class="description pl-3 pb-3 text-color6">${data.meals[i].strArea}, ${data.meals[i].strCategory}</div>
            </div>
            `
        }
        // document.getElementById('empty-text').innerHTML = ''
    }
    else{
        document.getElementById('comment').innerHTML = ``
        document.getElementById('empty-text').innerHTML = 'Nothing was found with this keyword'
        // console.log("empty");
    }
    
}

// loadMeals();