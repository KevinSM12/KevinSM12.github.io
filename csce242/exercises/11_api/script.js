const getCocktail = async()=>{
    try{
        return (await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")).json();
    }catch(error) {
        console.log(error);
    }
};

const drinkLit = document.getElementById("cocktail-lit");
drinkLit.classList.add("columns");

const showCocktail = async()=>{
    
    const response = await getCocktail();
    console.log(response);
    const drinks = response.drinks;
    

    drinks.forEach((drink) => {
        drinkLit.append(getDrink(drink));
    });
}

const getDrink = (drink)=>{
    const div = document.createElement("div");
    div.classList.add("one");
    drinkLit.append(div);

    const title = document.createElement("h3");
    title.innerHTML = drink.strDrink
    div.append(title);

    const img = document.createElement("img");
    img.src = drink.strDrinkThumb;
    div.append(img);

    const alcoholic = document.createElement("p");
    alcoholic.innerHTML = drink.strAlcoholic;
    div.append(alcoholic);
}

showCocktail();