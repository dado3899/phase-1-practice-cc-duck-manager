// write your code here!
const displayLike = document.querySelector("#duck-display-likes")
// Deliverable 1: Display everything
// Getting the data (fetch)
// let currentLikes = 0
let currentId
fetch("http://localhost:3000/ducks")
.then(r=>r.json())
.then(ducks=>{
    ducks.forEach(duckIndividual => {
        // console.log(duckIndividual)
        displayNav(duckIndividual)
    })
    displayDuck(ducks[0])

    displayLike.addEventListener("click", ()=>{
        displayLike.textContent = parseInt(displayLike.textContent) + 1 + " Likes"
        // console.log(currentLikes)
        patchDuck(parseInt(displayLike.textContent))
    })

    const duckForm = document.querySelector("#new-duck-form")
    duckForm.addEventListener("submit",(e)=>submitForm(e))
})
// Display the all of the navbar
    // For each through array
    // Create nav elements
function displayNav(duck){
    console.log(duck.id)
    const navbar = document.querySelector("#duck-nav")
    const img = document.createElement("img")
    img.src = duck.img_url
    navbar.append(img)

    img.addEventListener("click",()=>displayDuck(duck))
}


// Deliverable 2: Display each duck
// Add click event listener on the images
function displayDuck(duck){
    currentId = duck.id
    //query selecting
    const displayName = document.querySelector("#duck-display-name")
    const displayImage = document.querySelector("#duck-display-image")

    // set text content
    displayName.textContent = duck.name
    displayImage.src = duck.img_url
    displayLike.textContent = duck.likes + " Likes"
    // currentLikes = duck.likes

}
// edit existing dom to be duck content
// query select
// .textcontent edit
// Display the first duck

// Deliverable 3: Incriment like button
// add event listener on button
// edit existing like count (front end)
// Make sure "Like" is at the end

// BONUS: Patch
function patchDuck(newLikes){
    fetch(`http://localhost:3000/ducks/${currentId}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            likes: newLikes
        })
    })
}

// Deliverable 4: submission form
function submitForm(e){
    e.preventDefault()
    console.log(e.target["duck-image-input"].value)
    const newDuck = {
        "name": e.target["duck-name-input"].value,
        "img_url": e.target["duck-image-input"].value,
        "likes": 0
    }
    fetch("http://localhost:3000/ducks",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newDuck)
    })
    .then(r=>r.json())
    .then(duck => displayNav(duck))
    // displayNav(newDuck)
}
// select the form
// get data out of form
// display the data

// BONUS: Post