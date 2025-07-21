//selecting "popup-overlay","pop-content","add-button"

var popupoverlay = document.querySelector(".popup-overlay")
var popcontent = document.querySelector(".pop-content")
var addbutton = document.getElementById("add-button")
let currentEditDiv = null

addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popcontent.style.display="block"
})

var cancelbook= document.getElementById("cancel-book")

cancelbook.addEventListener("click",function(event){

    event.preventDefault()
    popupoverlay.style.display="none"
    popcontent.style.display="none"
})

//selecting "container","add-book","book-title","book-author","book-description"//

var container = document.querySelector(".container")
var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var bookdescription = document.getElementById("book-description")
var addbook = document.getElementById("add-book")
var updatebook = document.getElementById("update");


addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","container-head")
   div.innerHTML=`<h2>${booktitle.value}</h2>
    <h4>${bookauthor.value}</h4>
    <p>${bookdescription.value}</p>
    <button onclick="Delete(event)">Delete</button>
    <button onclick="Edit(event)">Edit</button>`;
        container.append(div)
        popupoverlay.style.display="none"
    popcontent.style.display="none"

    booktitle.value = ""
    bookauthor.value = ""
    bookdescription.value = ""
})



function Delete(event){
    event.target.parentElement.remove()
}

 function Edit(event) {

    currentEditDiv = event.target.parentElement;

    let h2 = currentEditDiv.querySelector("h2");
    let h4 = currentEditDiv.querySelector("h4");
    let p = currentEditDiv.querySelector("p");

    booktitle.value = h2.innerText;
    bookauthor.value = h4.innerText;
    bookdescription.value = p.innerText;

    popupoverlay.style.display = "block";
    popcontent.style.display = "block";
    addbook.style.display = "none";
    updatebook.style.display = "inline-block";
  }

 function Update(event) {
    event.preventDefault();

    let h2 = currentEditDiv.querySelector("h2");
    let h4 = currentEditDiv.querySelector("h4");
    let p = currentEditDiv.querySelector("p");

    h2.innerText = booktitle.value;
    h4.innerText = bookauthor.value;
    p.innerText = bookdescription.value;

    popupoverlay.style.display = "none";
    popcontent.style.display = "none";
    addbook.style.display = "inline-block";
    updatebook.style.display = "none";

    booktitle.value = ""
    bookauthor.value = ""
    bookdescription.value = ""
}

