console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 






function fetchDogs(){

    fetch(imgUrl)
    .then(response => response.json())
    .then(json => 
       json.message.forEach(url => 
        turnURLToHTML(url)))
    .catch(err => console.log(err))
      
    }

    function turnURLToHTML(url){

        const dogImageContainerDiv = document.getElementById('dog-image-container')

      let image = document.createElement("img")
      image.src = url
      dogImageContainerDiv.append(image)
    }
        

    //2

    function fetchAll(){

        const thatUl = document.getElementById('dog-breeds')

        fetch(breedUrl)
        .then(r => r.json())
        .then((response) => {

            let allTheKeys = Object.keys(response.message)
          
            allTheKeys.forEach((name) => {
              turnNameToHTML(name)
            })
        })
        function turnNameToHTML(name){
            const dogBreedsUL = document.getElementById('dog-breeds')
            let newLi = document.createElement("li")
            newLi.innerText = name
            newLi.className = "dogName"
            dogBreedsUL.append(newLi)
    }

    //3
    document.getElementById('dog-breeds').addEventListener("click", (evt) => {
        if (evt.target.classList.contains("dogName")) {
          // evt.target.className === "dogName"
          evt.target.style.color = "red"
          evt.target.style.backgroundColor = "blue"
        }
      })

      
const dogSelect = document.querySelector("#breed-dropdown")

      dogSelect.addEventListener("change", (evt) => {
        let chosenLetter = evt.target.value
        let allDogLis = document.querySelectorAll("li.dogName")
      
        allDogLis.forEach((li) => {
          if (li.innerText.startsWith(chosenLetter)) {
            li.style.display = ""
          } else {
            li.style.display = "none"
          }
        })
      
      })

}
        




  


document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
    fetchAll();
  });
