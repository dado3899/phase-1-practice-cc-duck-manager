// write your code here!
// Fetch the data
// Append the images to the
// document.addEventListener("DOMContentLoaded", getDucks())
const DuckName = document.querySelector('#duck-display-name')
const imagetofill = document.querySelector('#duck-display-image')
const DuckLikes = document.querySelector('#duck-display-likes')
const nav = document.querySelector('#duck-nav')

fetch("http://localhost:3000/ducks")   
.then(r => r.json())
.then(ducks => {
    console.log(ducks)
    Navbar(ducks)
    updateDuckPage(ducks[0])
    newDuckForm()
})
function Navbar(ducks){
    
    ducks.forEach(duck => {
        const duckimg = document.createElement('img')
        duckimg.setAttribute('src',duck.img_url)
        nav.appendChild(duckimg)
        duckimg.addEventListener('click', () => {
            updateDuckPage(duck)
        })
        //When selecting image show duck name,mage, and like buttons
        //Name image and like already exist
    });
}

function updateDuckPage(duck){
    DuckName.textContent = duck.name
    imagetofill.setAttribute('src',duck.img_url)
    let likecounter = duck.likes
    DuckLikes.textContent = likecounter + " Likes"
    
    DuckLikes.addEventListener('click', () => {
        //Add a patch
        likecounter += 1
        DuckLikes.textContent = likecounter + " Likes"
    })
}
function newDuckForm(){
    const DuckForm = document.querySelector('#new-duck-form')
    DuckForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const newduck = {
            "name": e.target['duck-name-input'].value,
            "img_url": e.target['duck-image-input'].value,
            "likes": 0
        }
        const duckimg = document.createElement('img')
        duckimg.setAttribute('src',newduck.img_url)
        nav.appendChild(duckimg)
        duckimg.addEventListener('click', () => {updateDuckPage(newduck)})
        DuckForm.reset()
    })
}