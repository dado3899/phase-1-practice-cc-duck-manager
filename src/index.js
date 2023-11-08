// write your code here!
// You may need to do 
// something to make sure your script tag is working in the 
// HTML first...
document.addEventListener("DOMContentLoaded",()=>{
    // let currentDuckId
    const likes = document.querySelector("#duck-display-likes")
    fetch('http://localhost:3000/ducks')
    .then(r=>r.json())
    .then(ducks => {
        console.log(ducks)
        displayDuck(ducks[0])
        ducks.forEach((duck)=>{
            navbar(duck)
        })
        likes.addEventListener("click",()=>{
            const newLike = parseInt(likes.textContent) +1

            for(let i = 0; i<ducks.length;i++){
                if(ducks[i].id===parseInt(document.querySelector("#duck-display-image").name)){
                    ducks[i].likes = newLike
                }
            }
            // console.log(currentDuckId)
            likes.textContent = `${newLike} likes`
        })
    })
    

    // console.log(nav)
    // Create img attatch to duck-nav
    function navbar(duck){
        const nav = document.querySelector("#duck-nav")
        const image = document.createElement("img")
        image.src = duck.img_url
        // console.log(image)
        nav.append(image)
        image.addEventListener("click",()=>{
            displayDuck(duck)
        })
        //Add click listener to image
        // Update page(#duck-display)
    }

    function displayDuck(duck){
        // currentDuckId = duck.id
        const name = document.querySelector("#duck-display-name")
        const image = document.querySelector("#duck-display-image")
        console.log(image)
        name.textContent = duck.name
        image.name = duck.id
        image.src = duck.img_url
        likes.textContent = `${duck.likes} likes`
    }
    const form = document.querySelector("#new-duck-form")
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        const newDuck = {
            name: e.target["duck-name-input"].value,
            img_url: e.target["duck-image-input"].value,
            likes: 0
        }
        navbar(newDuck)
    })
})
// Start by fetching
