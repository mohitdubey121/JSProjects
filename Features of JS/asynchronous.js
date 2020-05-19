/////////////////////////////////////////////////////////////
/////////lecture - asychronous function 

/* const first = () =>{
    console.log('First file is running');
    second();
    console.log('main id running');

}
const second = () =>{
    setTimeout(() =>{
        console.log('async file is running');
    },2000)
  
}

first();
 */


 ///////////////////////////////////////////////////////////////
 //////lecture - callback hell

/*  const getRecipe = () =>{

            setTimeout (() => {
                const recipeId= [100, 200, 300, 400];
                    console.log(recipeId);

                    setTimeout ((id)=>{
                         const recipe = {title : 'pasta', publisher: 'jonas'}
                            console.log(`${id}: ${recipe}`);
                        
                            setTimeout((publisher) =>{
                                const recipe2 = {title : 'cold coffee', publisher: 'jonas'}
                                    console.log(recipe2);

                            },1500,recipe.publisher)

                    }, 1500, recipeId[2])
                
            },1000)
 }

 getRecipe(); */


 /////////////////////////////////////////////////////////////////
 //////lecture - Asynchronous Javascript

 /* const getIDs = new Promise((resolve, reject) =>{
     setTimeout(()=>{
        resolve ([100, 200, 300, 400])  
     },1000)
 })

const getRecipe = recID => {
    return new Promise((resolve, reject) =>{
        setTimeout( ID => {
            const recipe = {title : 'pasta', publisher: 'jonas'}
            resolve(`${ID}: ${recipe.title}`);
        },1500, recID)
    })
}

const getPublisher = publisher =>{
    return new Promise((resolve, reject) =>{
        setTimeout((pub) =>{
            const recipe = {title : 'cold coffee', publisher: 'jonas'}
                resolve(`${pub} : ${recipe.title}`);
        },1500,publisher)
    })
} */

/*
getIDs
.then(IDs =>{
    console.log(IDs);
    return getRecipe(IDs[2]);//here it will return a promise
})
.then(recipe =>{
    console.log(recipe);
    return getPublisher('Jonas');
})
.then(recipe =>{
    console.log(recipe);
})
.catch(err => console.log('Error!!!!!!'));
 */

 
//////////////////////////////////////////////////////////////////////
////lecture - from promise to Async Await

/* async function a (){
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const publisher = await getPublisher('Jonas');
    console.log(publisher);

    return recipe;
}

a().then(result => console.log(`${result} is the best ever`)); */


////////////////////////////////////////////////////////////////////////////
//////lecture - ajax call
/* function getWeather(woeid){
    fetch('https://crossorigin.me/https://www.metaweather.com/api/location/2487956/')
    .then(result =>{
        console.log(result);
        return result.json();
    })
    .then(data =>{
        console.log(data);
        const today = data.consolidated_weather[0];
        console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
    })
    .catch(error => console.log(error));
}

getWeather(2487956); */
