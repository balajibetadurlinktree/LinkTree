 
console.log("Welcome to notes app. This is app.js");

showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let name = document.getElementById("name");
  let link = document.getElementById("link");
  let links = localStorage.getItem("links");
  if (links == null) {
    linksObj = [];
  } else {
    linksObj = JSON.parse(links);
  }
  linksObj.push({"name":name.value,"link":link.value});
  localStorage.setItem("links", JSON.stringify(linksObj));
  name.value = "";
  link.value = "";
//   console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let links = localStorage.getItem("links");
  if (links == null) {
    linksObj = [];
  } else {
    linksObj = JSON.parse(links);
  }
  let html = "";
  linksObj.forEach(function(element, index) {
    html += `
    
                    <div class="container my-2 text-center">
                    <div class="test">
                        <button style="width:60%;" onclick = "window.location.href='https://www.w3schools.com/  '"class="btn btn-outline-primary"> ${element['name']}</button>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
    </div>

                  
                
                `;
  });
  let linksElm = document.getElementById("links");
  if (linksObj.length != 0) {
    linksElm.innerHTML = html;
  } else {
    linksElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}
{/* <div class="container my-2">
        
        
<p class="text-center"> <button style="width:70%;" class="btn btn-outline-primary btn-lg">${element['name']}</button></p>
 <button id="${element['name']}"onclick="deleteNote(this.id)" class="btn btn-primary btn-lg">Delete</button>
</div>
<hr> */}
// Function to delete a note
function deleteNote(index) {
//   console.log("I am deleting", index);

  let links = localStorage.getItem("links");
  if (links == null) {
    linksObj = [];
  } else {
    linksObj = JSON.parse(links);
  }

  linksObj.splice(index, 1);
  localStorage.setItem("links", JSON.stringify(linksObj));
  showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
  

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('test');
    Array.from(noteCards).forEach(function(element){
      // console.log(element.getElementById("hi")[0].innerText)
        let cardTxt = element.getElementsByTagName("button")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})