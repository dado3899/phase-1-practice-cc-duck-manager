// write your code here!

// When the page loads, fetch the ducks and display each duck image 
// in the #duck-nav. You may need to do something to make sure your 
// script tag is working in the HTML first...
fetch('http://localhost:3000/ducks')
.then(r => r.json())
.then(ducks=>{
    // When the likes button is clicked, it increments the number of likes 
    // displayed for that duck. Be sure that the button continues to read "X likes".
    const likes = document.querySelector("#duck-display-likes")
    likes.addEventListener("click",()=>{
        likes.textContent = parseInt(likes.textContent)+1 + " likes"
    })

    // When the #new-duck-form is submitted, it generates a new duck image in the #duck-nav. 
    // When clicked, it acts like the other images in the #duck-nav and shows a name, image, 
    // and like button in the #duck-display. No persistence is needed. A duck starts with 0 likes.
    const duckForm = document.querySelector("#new-duck-form")
    duckForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        console.log(e.target["duck-name-input"].value)
        console.log(e.target["duck-image-input"].value)
        const newDuck = {
            name: e.target["duck-name-input"].value,
            img_url: e.target["duck-image-input"].value,
            likes: 0
        }
        e.target["duck-name-input"].value = ""
        e.target["duck-image-input"].value = ""

        displayDuckNav(newDuck)
    })

    displayMainDuck(ducks[0])
    ducks.forEach((indivDuck)=>{
        displayDuckNav(indivDuck)
    })
})

function displayDuckNav(indivDuck){
    const duckNavImage = document.createElement('img')
    duckNavImage.src = indivDuck.img_url
    const navbar = document.querySelector("#duck-nav")
    
    navbar.append(duckNavImage)

    duckNavImage.addEventListener("click", ()=>{
        // console.log(indivDuck)
        displayMainDuck(indivDuck)
    })
}
// When a user clicks one of the duck images, it shows the duck's 
// name, the image, and a likes button with the number of likes in the #duck-displaylike so:
// If another image is clicked in the #duck-nav it replaces the previous name, 
// image, and button with the proper content
function displayMainDuck(indivDuck){
    const name = document.querySelector("#duck-display-name")
    const image = document.querySelector("#duck-display-image")
    const likes = document.querySelector("#duck-display-likes")
    
    name.textContent = indivDuck.name
    image.src = indivDuck.img_url
    likes.textContent = indivDuck.likes  + ' likes'
}

