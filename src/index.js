// write your code here!
let ducknav = document.querySelector("#duck-nav")
let ducklikes = document.querySelector("#duck-display-likes")
let duckname = document.querySelector("#duck-display-name")
let duckimage = document.querySelector("#duck-display-image")
let newduckform = document.querySelector("#new-duck-form")
let GlobalLikes = 0;
console.log(ducknav)
// part 1
// Fetch the data
fetch("http://localhost:3000/ducks")
.then(r => r.json())
.then(ducks => {
    console.log(ducks)
    DisplayDuckNav(ducks)
    displayducks(ducks[0])
    ducklikecounter()
    newDuckFormSubmit()
})
// Display images in duck-nav
function DisplayDuckNav(ducks){
    ducks.forEach((duck) =>{
        let navduckimage = document.createElement("img")
        navduckimage.src = duck.img_url
        navduckimage.addEventListener('click', ()=>{
            displayducks(duck)
        })
        ducknav.appendChild(navduckimage)

    })
}
// Part 2
// On clicking image apply duck attributes to duck display
function displayducks(duck){
    duckname.textContent = duck.name
    duckimage.src = duck.img_url
    ducklikes.textContent = duck.likes + " Likes"
    GlobalLikes = duck.likes
}
//part 3
// Click duck like button and adds a like (also the format is x Likes)
function ducklikecounter(){
    ducklikes.addEventListener('click', ()=>{
        GlobalLikes += 1
        console.log(GlobalLikes)
        ducklikes.textContent = GlobalLikes + " Likes"
    })
    //Reset the text content
}
// part 4
// Submit new duck, takes form inputs and on clicking submit we will add to the nav
// bar and then display (Treats like other nav bar elements)
function newDuckFormSubmit(){
    newduckform.addEventListener("submit", (e)=>{
        e.preventDefault()
        console.log(e.target["duck-name-input"].value)
        console.log(e.target["duck-image-input"].value)
        //Creates newduck so we can pass it into displayducks
        let newduck = {
            "name": e.target["duck-name-input"].value,
            "img_url": e.target["duck-image-input"].value,
            "likes": 0
        }
        //Creates ducks similarly to DisplayDuckNav
        let navduckimage = document.createElement("img")
        navduckimage.src = newduck.img_url
        navduckimage.addEventListener('click', ()=>{
            displayducks(newduck)
        })
        ducknav.appendChild(navduckimage)
    })
    
}